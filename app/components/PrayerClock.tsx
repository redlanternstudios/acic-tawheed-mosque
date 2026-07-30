"use client";

import { useEffect, useMemo, useState } from "react";
import { prayerSchedule } from "../site-content";

type PrayerSnapshot = {
  nowLabel: string;
  countdown: string;
  nextName: string;
  nextTime: string;
  status: string;
  progress: string;
  rows: Array<{ name: string; time: string; active: boolean }>;
};

function buildPrayerDate(base: Date, time: string) {
  const [hour, minute] = time.split(":").map(Number);
  return new Date(base.getFullYear(), base.getMonth(), base.getDate(), hour, minute, 0, 0);
}

function formatTime(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
  }).format(date);
}

function formatCountdown(ms: number) {
  const total = Math.max(0, Math.floor(ms / 1000));
  const hours = Math.floor(total / 3600);
  const minutes = Math.floor((total % 3600) / 60);
  const seconds = total % 60;
  return [hours, minutes, seconds]
    .map((value) => String(value).padStart(2, "0"))
    .join(":");
}

function getSnapshot(now: Date): PrayerSnapshot {
  const schedule = prayerSchedule.map((item) => ({
    ...item,
    date: buildPrayerDate(now, item.time),
  }));

  let nextIndex = schedule.findIndex((item) => item.date > now);
  let nextPrayer = nextIndex >= 0 ? schedule[nextIndex] : null;
  let previousPrayer = null as (typeof schedule)[number] | null;
  let currentPrayer = null as (typeof schedule)[number] | null;

  for (let index = schedule.length - 1; index >= 0; index -= 1) {
    if (schedule[index].date <= now) {
      currentPrayer = schedule[index];
      break;
    }
  }

  if (!nextPrayer) {
    nextPrayer = {
      ...prayerSchedule[0],
      date: new Date(schedule[0].date.getTime() + 24 * 60 * 60 * 1000),
    };
    previousPrayer = schedule[schedule.length - 1];
  } else {
    previousPrayer = nextIndex === 0 ? schedule[schedule.length - 1] : schedule[nextIndex - 1];
  }

  const safeNextPrayer = nextPrayer;
  const safePreviousPrayer = previousPrayer ?? schedule[schedule.length - 1];
  const countdown = safeNextPrayer.date.getTime() - now.getTime();
  const progress = Math.min(
    100,
    Math.max(
      0,
      ((now.getTime() - safePreviousPrayer.date.getTime()) /
        (safeNextPrayer.date.getTime() - safePreviousPrayer.date.getTime())) *
        100,
    ),
  );

  return {
    nowLabel: formatTime(now),
    countdown: formatCountdown(countdown),
    nextName: safeNextPrayer.name,
    nextTime: formatTime(safeNextPrayer.date),
    status: currentPrayer ? `Current: ${currentPrayer.name}` : `Next up: ${safeNextPrayer.name}`,
    progress: `${progress}%`,
    rows: prayerSchedule.map((item) => ({
      ...item,
      active: item.name === safeNextPrayer.name || item.name === currentPrayer?.name,
    })),
  };
}

export function PrayerClock({ compact = false }: Readonly<{ compact?: boolean }>) {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  const snapshot = useMemo(() => getSnapshot(now), [now]);

  return (
    <section className={compact ? "prayer-card prayer-card-compact" : "prayer-card"} aria-label="Live prayer clock">
      <div className="prayer-card-head">
        <span className="eyebrow">Live prayer clock</span>
        <h2>
          <span data-prayer-next-name>{snapshot.nextName}</span>
          <span className="prayer-kicker">next prayer</span>
        </h2>
      </div>

      <div className="prayer-countdown">
        <div className="countdown-value" data-prayer-countdown>
          {snapshot.countdown}
        </div>
        <div className="countdown-meta">
          <span>
            Now <strong data-prayer-now>{snapshot.nowLabel}</strong>
          </span>
          <span>
            At <strong data-prayer-next-time>{snapshot.nextTime}</strong>
          </span>
        </div>
      </div>

      <div className="progress-track" aria-hidden="true">
        <div className="progress-fill" style={{ width: snapshot.progress }} />
      </div>

      <div className="prayer-status" data-prayer-status>
        {snapshot.status}
      </div>

      {compact ? null : (
        <div className="prayer-board" data-prayer-date>
          {snapshot.rows.map((row) => (
            <div className={row.active ? "prayer-row active" : "prayer-row"} key={row.name}>
              <span>{row.name}</span>
              <strong>{row.time}</strong>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

# ACIC Tawheed Mosque Product Specification

## Product vision

Build a premium, welcoming digital home for the Afghan Community Islamic Center, with Tawheed Mosque as the community subname.

**Positioning:** Rooted in Afghan heritage. Open to the entire Ummah.

The site must feel especially welcoming to potential reverts, first-time visitors, children age four and above, Afghan families, and Muslims from every background.

## Brand direction

Afghan hospitality × Apple-level simplicity × San Diego openness.

Use lapis, emerald, sandstone, charcoal, white, and restrained gold. Avoid generic Islamic templates, neon green, ornamental overload, glassmorphism, excessive cards, and invented religious claims.

## Core public routes

- `/`
- `/visit`
- `/visit/prayer-times`
- `/learn/open-masjid`
- `/learn/children-families`
- `/learn/new-muslims`
- `/community`
- `/community/support`
- `/events`
- `/media`
- `/about`
- `/donate`
- `/contact`
- `/admin`

## Homepage sequence

1. Calm institutional header
2. Community illustration hero
3. Today at ACIC and prayer times
4. Open Masjid weekday learning
5. First visit guidance
6. Children and families
7. Learn Together
8. Upcoming events
9. Afghan roots and community history
10. Ask the Mosque
11. Donation pathways
12. Contact, entrances, and hours footer

## Confirmed operational facts

- Public name: Afghan Community Islamic Center
- Community subname: Tawheed Mosque
- Address: 3333 Sandrock Road, San Diego, CA 92123
- Public hours: 5:00 AM to 11:00 PM
- Weekday learning: after Asr through Isha
- Adults and children learn side by side
- Children age four and above are encouraged to attend
- Instruction may be offered in English, Dari, and Arabic depending on context and teacher
- Private lessons may be available by inquiry
- Childcare availability may be discussed by request
- Main entrance: west side
- Men’s entrance: north side
- Women’s entrance: south side
- Men’s and women’s revert support is available through community contacts
- Visitors should expect the community to notice and welcome them

## Ask the Mosque

The assistant is presented as a mosque service, not as an AI product or religious authority.

It may answer approved questions about prayer times, hours, entrances, events, programs, visiting, children, donations, and introductory Islam content from board-approved sources.

It must not issue fatwas, adjudicate disputes, present itself as an Imam or scholar, fabricate citations, or expose private inquiries. Low-confidence and personal questions escalate to a human administrator or approved community contact.

## Accessibility and quality

- WCAG 2.2 AA
- Keyboard and screen-reader support
- English and RTL-ready content architecture
- Minimum 44px touch targets
- Reduced-motion support
- Captions and transcripts for media
- No essential text embedded in images
- Responsive from small phones through large desktop displays

## Launch guardrails

- Do not invent board members, program schedules, donation policies, testimonials, or Islamic rulings
- Do not crop important subjects from the community hero illustration
- Do not place a dark overlay on the hero image
- Prayer times and announcements must be editable from a phone
- Sensitive forms must not leak into analytics
- Public forms must use validated server actions
- Supabase admin data must use RLS

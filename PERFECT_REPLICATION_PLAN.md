# Perfect Replication Plan - New10labs

## Analysis Complete ✅

I've analyzed ALL original Next.js components from https://new10-labs.vercel.app/

## Key Findings:

### 1. Design System
- **Colors**: Gradient-heavy design (blue-600, teal-600, purple-600)
- **Typography**: Bold headings with gradient text effects
- **Spacing**: Consistent py-16 for sections, py-20 for trust section
- **Shadows**: shadow-xl, shadow-2xl for depth
- **Borders**: border-2 for emphasis, rounded-2xl, rounded-3xl
- **Glass Effects**: backdrop-blur-lg with bg-white/70

### 2. Components Structure

#### Header
- Sticky top bar with gradient (from-blue-600 via-teal-600 to-purple-600)
- Logo with image (New10labs-logo.png)
- Fixed location (Chennai 600102)
- Search with instant results dropdown
- Dark mode toggle
- Support and Home Visit buttons

#### Hero
- Gradient background (from-blue-100 via-teal-100 to-purple-100)
- Animated background blobs
- Image carousel (2 images crossfading)
- Floating cards with animations
- Search bar with dropdown
- Quality highlights grid

#### TestCard
- Card component with glass effect
- Discount badge (top-right)
- Parameters and report time icons
- Fasting badge
- Price with strikethrough
- WhatsApp booking button
- data-item-id for search highlighting

#### PackageCard
- Similar to TestCard but with features list
- Popular badge (top-right, purple gradient)
- "View Tests Included" button
- Modal with full test list
- Numbered test items in modal

#### HomePage
- Tests section: bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50
- Packages section: bg-white with horizontal scroll
- Scroll arrows with hover effects
- Fixed height packages (h-[510px])
- Doctor consultation CTA with glass effect

#### HealthConcerns
- 8 categories in 2x4 or 4x4 grid
- Color-coded cards with icons
- Modal with test grid
- WhatsApp booking integration

#### TrustSection
- 4 services with SVG illustrations
- Animated SVGs (floating, rotating, scaling)
- Custom-drawn icons (not just emoji)

#### Footer
- 4-column grid
- Logo image
- Social media icons
- Quick links
- Contact info with icons
- Bottom bar with policies

#### FloatingButtons
- WhatsApp (green-500) and Call (blue-500)
- Floating animation (y: [0, -10, 0])
- Fixed bottom-24 right-6
- Scale on hover

#### MobileNav
- Fixed bottom nav
- 4 items: Home, Tests, Packages, Support
- Backdrop blur
- Smooth scroll to sections

## Implementation Status:

### ✅ Completed:
1. UI Components (Button, Card, Badge)
2. Utility functions (formatPrice, cn)
3. Enhanced global CSS
4. Basic component structure

### 🔄 In Progress:
1. Exact styling replication
2. SVG animations in TrustSection
3. Image carousel in Hero
4. Search dropdown functionality
5. Modal implementations
6. Floating animations

### ⏳ To Do:
1. Add logo image (New10labs-logo.png)
2. Add blood sample images
3. Create WhatsAppBookingModal
4. Create SupportModal
5. Implement dark mode toggle
6. Add scroll-to-section functionality
7. Test all animations
8. Verify responsive design

## Next Steps:

1. Update all components with exact styling from original
2. Add missing images
3. Create modal components
4. Test on localhost
5. Push to GitHub
6. Deploy to Vercel
7. Final comparison and adjustments

---

**Goal**: Pixel-perfect replication of https://new10-labs.vercel.app/
**Timeline**: Taking time to get it perfect
**Status**: Ready to implement

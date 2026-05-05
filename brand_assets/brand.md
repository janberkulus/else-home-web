---
name: Else Home Identity
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0edec'
  surface-container-high: '#ebe7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#45464e'
  inverse-surface: '#313030'
  inverse-on-surface: '#f3f0ef'
  outline: '#75777f'
  outline-variant: '#c5c6cf'
  surface-tint: '#4e5d87'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#061940'
  on-primary-container: '#7383af'
  inverse-primary: '#b6c5f6'
  secondary: '#b02e1a'
  on-secondary: '#ffffff'
  secondary-container: '#fc644b'
  on-secondary-container: '#630600'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1a1c1c'
  on-tertiary-container: '#838484'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2ff'
  primary-fixed-dim: '#b6c5f6'
  on-primary-fixed: '#061940'
  on-primary-fixed-variant: '#36466e'
  secondary-fixed: '#ffdad4'
  secondary-fixed-dim: '#ffb4a6'
  on-secondary-fixed: '#3f0300'
  on-secondary-fixed-variant: '#8e1304'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c7'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
  background: '#fcf9f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
typography:
  headline-xl:
    fontFamily: Space Grotesk
    fontSize: 64px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.3'
    letterSpacing: '0'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  label-caps:
    fontFamily: Space Grotesk
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  section-gap: 120px
  grid-margin: 64px
  gutter: 24px
  container-max: 1440px
---

## Brand & Style

The design system is rooted in the intersection of architectural precision and restful luxury. It targets a discerning audience that values engineering excellence as much as aesthetic comfort. The visual language conveys "The Science of Sleep" through a minimalist, high-end lens.

The chosen style is **Technical Minimalism**. It utilizes expansive whitespace to evoke a sense of calm and breathing room, reminiscent of a premium showroom. The interface emphasizes high-fidelity product photography and precise technical illustrations over decorative elements. By combining a deep, authoritative navy with a sharp, geometric typeface, the design system projects a sense of export-quality reliability and bespoke craftsmanship.

## Colors

The palette is led by **Deep Navy (#03163D)**, serving as the primary anchor to communicate stability, professionalism, and the quiet of the night. This color should be used for major structural elements, headings, and primary navigation states.

**Deep Red (#8A1002)** acts as a high-precision accent. It is reserved exclusively for critical calls to action (CTAs), price highlights, or subtle indicators of customization options. It must be used sparingly to maintain its impact and prevent the UI from feeling aggressive.

The background architecture relies on **Soft Gray (#F4F4F4)** and pure White to create a gallery-like environment. The **Rich Black (#141414)** is used for body text to ensure maximum legibility and a premium editorial feel.

## Typography

This design system employs a dual-font strategy to balance technical sophistication with readability. 

**Space Grotesk** is used for all headlines and labels. Its geometric, slightly futuristic construction mirrors the "Neuropol" aesthetic while maintaining the professional clarity required for a premium brand. It represents the "machine-made" precision of the manufacturing process.

**Inter** is utilized for all body copy and technical specifications. It is chosen for its exceptional legibility at smaller scales, ensuring that material descriptions and configuration details are easily digestible. 

Large-scale headlines should use tighter letter spacing to feel "locked-in" and architectural, while small labels use increased tracking for a sophisticated, breathable look.

## Layout & Spacing

The layout philosophy follows a **Fixed-Width Centered Grid** to mimic the deliberate composition of a high-end print magazine. A 12-column system is used with generous gutters to allow product photography to "breathe."

Vertical rhythm is driven by substantial section gaps (120px+), creating a rhythmic cadence as the user scrolls through product features. Elements should often be offset or asymmetrical to highlight specific technical details or "exploded" product views, breaking the grid only when showing the internal craftsmanship of the bed bases.

## Elevation & Depth

To maintain a clean and modern aesthetic, this design system avoids heavy shadows. Depth is instead conveyed through **Tonal Layering** and **Low-Contrast Outlines**.

1.  **Surfaces:** Elements like product cards or configuration panels use subtle shifts in background color (e.g., White on Soft Gray) rather than drop shadows.
2.  **Stroke:** A 1px border in a very light tint of Navy is used to define boundaries for interactive elements.
3.  **Active Depth:** When an element requires elevation (like a floating "Add to Cart" bar), a very soft, high-diffusion ambient shadow with a slight Navy tint is used to prevent the "muddy" look of standard black shadows.

## Shapes

The shape language is primarily **Linear and Crisp**. Elements use a "Soft" (0.25rem) corner radius to prevent the UI from feeling sharp or industrial, while maintaining a clear distinction from the "bubbly" consumer-grade apps.

Interactive elements like buttons and input fields utilize these subtle radii, while large hero imagery and structural containers should remain perfectly sharp (0px) to emphasize the architectural quality of the furniture.

## Components

### Buttons
- **Primary:** Solid Deep Navy with White text. Sharp or slightly rounded (4px). No gradients.
- **Secondary:** Outline Deep Navy with 1px stroke.
- **CTA:** Solid Deep Red. Used only for the final conversion point (e.g., "Complete Customization").

### Product Cards
Cards feature a minimal frame with high-contrast product photography. Text is kept to a minimum: Name (Headline-md), brief material descriptor (Body-md), and a starting price. Hover states involve a subtle zoom of the image rather than a shadow.

### Input Fields
Used heavily in the customization flow. These should be "Underlined" or "Lightly Boxed" with 1px strokes. Active states are indicated by a transition to Deep Navy.

### Customization Stepper
A technical component used for selecting bed bases, headboards, and fabrics. Use icon-based selections with clean, vector illustrations of the mechanical components.

### Technical Detail Callouts
Small, floating labels with thin leader lines pointing to specific parts of a product image (e.g., "Pocket Spring System"). These should use the `label-caps` typography level for an engineered look.
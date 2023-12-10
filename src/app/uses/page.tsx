import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Uses',
  description: 'Software I use, gadgets I love, and other things I recommend.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Software I use, gadgets I love, and other things I recommend."
      intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
    >
      <div className="space-y-20">
        <ToolsSection title="Workstation">
          <Tool title="13” MacBook Air, Dual-Core Intel Core i5, 2017">
            It is a 13-inch MacBook Air laptop from 2017 with a 1.8GHz dual-core
            Intel Core i5 processor, 128GB SSD, 8GB memory, and long battery
            life.
          </Tool>
          <Tool title="Dell Monitor">
            High-quality display screen with great resolutions and sleek
            designs, featuring ergonomic features. It supports both HDMI and
            Type C.
          </Tool>
          <Tool title="Keychron K8 Wireless Mechanical Keyboard">
            Keychron K8 Tenkeyless Wireless Mechanical Keyboard has included
            keycaps for both Windows and macOS, and users can hotswap every
            switch in seconds with the hot-swappable version.
          </Tool>
          <Tool title="Logitech M720 Triathlon">
            The Logitech M720 Triathlon is a wireless mouse that can connect to
            multiple devices via Bluetooth or USB, has great battery life, and
            allows easy switching between connected devices.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Development tools">
          <Tool title="Zed">
            Zed is a high-performance, multiplayer code editor from the creators
            of Atom and Tree-sitter.
          </Tool>
          <Tool title="warp">
            Warp is a modern, Rust-based terminal with AI built in so you and
            your team can build great software, faster.
          </Tool>
          <Tool title="supabase">
            Great software for working with databases. Has saved me from
            building about a thousand admin interfaces for my various projects
            over the years.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Design">
          <Tool title="Figma">
            We started using Figma as just a design tool but now it’s become our
            virtual whiteboard for the entire company. Never would have expected
            the collaboration features to be the real hook.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Productivity">
          <Tool title="Raycast">
            Raycast is a blazingly fast, totally extendable launcher. It lets
            you complete tasks, calculate, share common links, and much more.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}

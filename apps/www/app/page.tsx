import Image from "next/image"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Announcement } from "@/components/announcement"
import { ExamplesNav } from "@/components/examples-nav"
import { Icons } from "@/components/icons"
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import { buttonVariants } from "@/registry/default/ui/button"
import { Text } from "@/registry/default/ui/text"
import AuthPage from "@/app/examples/authentication/page"

export default function IndexPage() {
  return (
    <div className="">
      <div className="container relative">
        <PageHeader>
          <Announcement />
          <PageHeaderHeading>Build your component library</PageHeaderHeading>
          <PageHeaderDescription>
            Beautifully designed components that you can copy and paste into
            your apps. Accessible. Customizable. Open Source.
          </PageHeaderDescription>
          <PageActions>
            <Link href="/docs" className={cn(buttonVariants())}>
              Get Started
            </Link>
            <Link
              target="_blank"
              rel="noreferrer"
              href={siteConfig.links.github}
              className={cn(buttonVariants({ variant: "secondary" }))}
            >
              <Icons.gitHub className="mr-2 h-4 w-4" />
              GitHub
            </Link>
          </PageActions>
        </PageHeader>
      </div>
      <section className="grid grid-cols-2 grid-rows-[repeat(2,calc(fit-content/2))] gap-[1px] border-y border-y-gray-200 bg-gray-200">
        <div className="relative flex h-full flex-col gap-6 bg-background-200 p-4 hover:bg-background-100">
          hej
        </div>
        <Link
          href="/docs/colors"
          className="relative flex h-full flex-col gap-6 bg-background-200 p-4 hover:bg-background-100"
        >
          <div className="flex justify-between">
            <div className="flex h-24 w-8 items-center justify-center rounded-full border bg-background-200">
              <div className="h-[72px] w-2 rounded-full bg-gray-800"></div>
            </div>
            <div className="flex h-24 w-8 items-center justify-center rounded-full border bg-background-200">
              <div className="h-[72px] w-2 rounded-full bg-blue-800"></div>
            </div>
            <div className="flex h-24 w-8 items-center justify-center rounded-full border bg-background-200">
              <div className="h-[72px] w-2 rounded-full bg-purple-800"></div>
            </div>
            <div className="flex h-24 w-8 items-center justify-center rounded-full border bg-background-200">
              <div className="h-[72px] w-2 rounded-full bg-pink-800"></div>
            </div>
            <div className="flex h-24 w-8 items-center justify-center rounded-full border bg-background-200">
              <div className="h-[72px] w-2 rounded-full bg-red-800"></div>
            </div>
            <div className="flex h-24 w-8 items-center justify-center rounded-full border bg-background-200">
              <div className="h-[72px] w-2 rounded-full bg-amber-800"></div>
            </div>
            <div className="flex h-24 w-8 items-center justify-center rounded-full border bg-background-200">
              <div className="h-[72px] w-2 rounded-full bg-green-800"></div>
            </div>
            <div className="flex h-24 w-8 items-center justify-center rounded-full border bg-background-200">
              <div className="h-[72px] w-2 rounded-full bg-teal-800"></div>
            </div>
          </div>
          <div>
            <Text size="heading-16">Colors</Text>
            <Text size={16} color="gray-900">
              A high contrast, accessible color system.
            </Text>
          </div>
          <div className="pointer-events-none absolute inset-0"></div>
        </Link>
        <Link
          href="/docs/grid"
          className="group relative flex h-full flex-col gap-6 bg-background-200 p-4 hover:bg-background-100"
        >
          {/* TODO update this once grid works */}
          <div className="grid grid-cols-8 grid-rows-2 gap-[1px] border border-gray-400 bg-gray-400">
            {Array.from({ length: 16 }).map((_, index) => (
              <div
                key={index}
                className="aspect-square bg-background-200 group-hover:bg-background-100"
              ></div>
            ))}
          </div>
          <div>
            <Text size="heading-16">Grid</Text>
            <Text size={16} color="gray-900">
              A huge part of the new Vercel aesthetic
            </Text>
          </div>
          <div className="pointer-events-none absolute inset-0"></div>
        </Link>
        <div className="relative flex h-full flex-col gap-6 bg-background-200 p-4 hover:bg-background-100">
          hej
        </div>
      </section>
    </div>
  )
}

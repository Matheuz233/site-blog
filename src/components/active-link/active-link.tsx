import { cn } from "@/lib/utils"
import Link, { LinkProps } from "next/link"
import { useRouter } from "next/router"

type ActiveLinkProps = {
  children: React.ReactNode
} & LinkProps

export const ActiveLink = ({ children, href, ...rest }: ActiveLinkProps) => {
  const router = useRouter()
  const isCurrentPath =
    router.pathname === href ||
    router.asPath === href ||
    (typeof href === "string" && router.asPath.startsWith(href))
  return (
    <Link
      href={href}
      className={cn(
        "text-sm font-medium transition-colors hover:text-blue-200",
        isCurrentPath ? "text-blue-200" : "text-gray-100"
      )}
      {...rest}>
      {children}
    </Link>
  )
}

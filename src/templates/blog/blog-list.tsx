import { PostCard } from "@/components/post-card/post-card"
import { Search } from "@/components/search/search"

export function BlogList() {
  return (
    <div className="flex flex-col py-24 flex-grow h-full">
      <header className="">
        <div className="container space-y-6 flex flex-col items-start justify-between md:flex-row md:items-end lg:items-end">
          <div className="flex flex-col gap-4 md:px-0">
            <span className="text-body-tag text-cyan-100 w-fit rounded-md text-center md:text-left py-2 px-4 bg-cyan-300">
              BLOG
            </span>
            <h1 className="text-balance text-start md:text-left text-heading-lg md:text-heading-xl max-w-2xl text-gray-100">
              Dicas e estratégias para impulsionar seu negócio
            </h1>
          </div>
          <Search />
        </div>
      </header>

      <PostCard
        title="Transformando seu negócio em uma loja virtual"
        description="Se você está buscando uma maneira simples e eficaz de vender seus produtos online..."
        date="20/12/2024"
        slug="transformando"
        image="/assets/primeiro-post.png"
        author={{
          avatar: "/customer-01.png",
          name: "Aspen Dokidis",
        }}
      />
    </div>
  )
}

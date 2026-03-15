import { SectionRenderer } from "@/components/section-renderer";
import { getPost } from "@/hooks/useGetPortfolio";
import { Section } from "@/types/section";

export default async function Page({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const data = await getPost(slug);

  if (!data) {
    return <p>Proposal Not Found</p>
  };

  console.log(JSON.stringify(data.sections, null, 2))

  return (
    <main className="max-w-7xl p-8 mx-auto flex flex-col space-y-10">
      {data.sections.map((section: Section) => (
        <SectionRenderer
          key={section._key}
          section={section}
          post={data}
        />
      ))}
    </main>
  );
}
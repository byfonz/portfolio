import { SectionRenderer } from "@/components/section-renderer";
import { getPost } from "@/hooks/useGetPortfolio";
import { Section } from "@/types/section";

const members = [
  {
    key: 1,
    name: "Jaems Jesús Pulido Salinas",
  },
  {
    key: 2,
    name: "Tyrus Fabián Martínez Velazquez",
  },
  {
    key: 3,
    name: "Luis Fernando Bravo Carbajal",
  },
];

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = await getPost(slug);

  if (!data) {
    return <p>Proposal Not Found</p>;
  }

  console.log(JSON.stringify(data.sections, null, 2));

  return (
    <main className="w-full max-w-7xl p-8 mx-auto flex flex-col space-y-10">
      <header className="min-w-full flex items-center gap-8 p-6 py-6 rounded-lg bg-blue-600">
        <img
          className="h-20"
          src="https://static.wixstatic.com/media/d37dc4_5386a03afdd34069a3b43974d6b2a3ce~mv2.png/v1/fill/w_148,h_202,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/UABC_escudo_SER%20(2).png"
          alt=""
        />
        <div className="flex-1 flex flex-col space-y-2">
          <h2 className="text-xl text-white font-medium">
            Tecnologías y Herramientas Innovadoras
          </h2>
          <div className="block md:flex items-center gap-x-3">
            {members.map((item) => (
              <span key={item.key} className="text-xs text-white italic">
                {item.name}
                {" • "}
              </span>
            ))}
          </div>
        </div>
      </header>
      {data.sections.map((section: Section) => (
        <SectionRenderer key={section._key} section={section} post={data} />
      ))}
    </main>
  );
}

import type { JsonLdNode } from "@/lib/structured-data";

/** Renders structured data. `<` is escaped so content can never close the script tag. */
export function JsonLd({ data }: { data: JsonLdNode | JsonLdNode[] }) {
  const nodes = Array.isArray(data) ? data : [data];
  return (
    <>
      {nodes.map((node, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(node).replace(/</g, "\\u003c") }}
        />
      ))}
    </>
  );
}

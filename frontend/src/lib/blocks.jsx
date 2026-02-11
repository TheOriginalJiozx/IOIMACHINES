export function genId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2);
}

export function blocksToPlainText(content) {
  if (!content && content !== "") return "";
  let array = content;
  if (typeof content === "string") {
    try {
      array = JSON.parse(content);
    } catch (error) {
      return typeof content === "string" ? content : "";
    }
  }
  if (Array.isArray(array)) {
    return array
      .map((block) => {
        try {
          return block && block.type === "paragraph" && block.text ? block.text : "";
        } catch (error) {
          return "";
        }
      })
      .filter((string) => string && string.length > 0)
      .join("\n");
  }
  return typeof content === "string" ? content : "";
}

export function renderBlock(block, index) {
  if (!block) return null;
  switch (block.type) {
    case "paragraph":
      return (
        <p key={index} className="text-sm text-[#606060] mb-4">
          {block.text}
        </p>
      );
    case "heading":
      if (block.level === 2)
        return (
          <h2 key={index} className="text-2xl font-bold mb-3">
            {block.text}
          </h2>
        );
      if (block.level === 3)
        return (
          <h3 key={index} className="text-xl font-semibold mb-2">
            {block.text}
          </h3>
        );
      return (
        <h4 key={index} className="font-semibold mb-2">
          {block.text}
        </h4>
      );
    case "image":
      return (
        <div key={index} className="w-full mb-4 overflow-hidden rounded shadow">
          <img src={block.src} alt={block.alt || ""} className="w-full md:h-[28rem] object-cover" />
        </div>
      );
    case "list":
      return (
        <ul key={index} className={`list-${block.style || "disc"} pl-5 text-sm text-[#606060] mb-4`}>
          {(block.items || []).map((it, i) => (
            <li key={i}>{it}</li>
          ))}
        </ul>
      );
    default:
      return <div key={index} dangerouslySetInnerHTML={{ __html: block.html || "" }} />;
  }
}

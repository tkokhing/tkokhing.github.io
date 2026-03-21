import Container from "@/app/_components/preference/container";
import { loadPost } from "@/lib/share/api";
import { PostBody } from "@/app/_components/post_gen/post-body";

import Mermaid from "@/app/_components/post_gen/render-mermaid";

// import MyTest from "@/app/_components/mytest";
// import MyTest2 from "@/app/_components/mytest2";

export default function Index() {

  const ImportComponents = {
    Mermaid,
  };

  const diagram = `
    flowchart LR
    A[User] --> B[Gateway]
    B --> C[Application]
    C --> D[(Database)]
    `;

  const dfdiagram = `
      %%{init: {
      "theme": "default",
      "themeVariables": {
        "background": "#ffffff",
        "primaryTextColor": "#000000",
        "primaryBorderColor": "#444444",
        "lineColor": "#444444",
        "fontFamily": "Arial, Helvetica, sans-serif"
      }
    }}%%

    flowchart TB

    subgraph Internet
    U[User]
    end

    subgraph Cloud_Environment
    CA[Cloud Application]
    CD[(Cloud Database)]
    end

    subgraph Hybrid_Connectivity
    HC[VPN / Direct Connect]
    end

    subgraph Secure_Intermediary
    HG[Hybrid Gateway]
    end

    subgraph On_Premises
    OP[On-Premises Application]
    OD[(On-Premises Database)]
    end

    U -->|1 Login Request| CA
    CA -->|2 Read / Write| CD
    CA -->|3 API Request| HC
    HC -->|4 Secure Gateway| HG
    HG -->|5 Internal Call| OP
    OP -->|6 Query| OD

    %% focus node
    classDef focus fill:#ffffff,stroke:#ff0000,stroke-width:3px,color:#000000;

    %% dim nodes
    classDef dim fill:#f5f5f5,stroke:#cccccc,color:#999999;

    class HG focus;
    class U,CA dim;

    %% trust zone styling
    style Internet fill:#ffffff,stroke:#999999,stroke-dasharray: 5 5
    style Cloud_Environment fill:#eef5ff,stroke:#5b8bd9
    style Hybrid_Connectivity fill:#fff7e6,stroke:#d69e2e
    style Secure_Intermediary fill:#ffeaea,stroke:#ff0000
    style On_Premises fill:#f0fff4,stroke:#38a169
    `;

  const readmermaid = loadPost("mermaid.md","_blog_post/_blogs")
  // const readmermaidmdx = loadPost("test_mermaid.mdx","_blog_post/_blogs")
  return (
    <main>
      <Container>
        <h1> This page is for logic testing only...</h1>
        <h1> - - - - </h1>
        <h2> Mermaid Server-side WORK!...</h2>
        <p> - PostBody content=readmermaid </p>

        <PostBody content={readmermaid} components={ImportComponents}/>
        <br />
        <p> - PostBody content=readmermaidmdx </p>
        {/* <PostBody content={readmermaidmdx} components={ImportComponents}/> */}

        <h2> Mermaid `const diagram` script directly at <code>page.tsx</code> WORK and font is NOT gray out!...</h2>
        <br />
        <h3>diagram</h3>
        <Mermaid chart={diagram} />

        <h3>dfdiagram</h3>
        <Mermaid chart={dfdiagram} />
      </Container>
    </main>
  );
}


//
//
//

// import Container from "@/app/_components/preference/container";
// // import MyTest from "@/app/_components/mytest";
// // import MyTest2 from "@/app/_components/mytest2";

// export default function Index() {

//   return (
//     <main>
//       <Container>
//         <h1> This page is for logic testing only...</h1>
//         {/* <MyTest />
//         <MyTest2 /> */}

//       </Container>
//     </main>
//   );
// }

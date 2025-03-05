import Container from "@/app/_components/container";
import SubpageHeader from "@/app/_components/main_frame/subpage-header";

export default function Research() {
  return (
    <main>
      <Container>
      <SubpageHeader subPath={"research/title"} title={""}/>

      <h1 className="title">
        Welcome to <a href="https://tkokhing.github.io/">my technical blog!</a>
      </h1>

      <p className="description">Tester Page</p>
      <ul className="para_one">
        <p>Research 1.</p>
      </ul>
      <ul className="para_two">
        <p>Research 2.</p>
      </ul>
    </Container>
    </main>
  );
}

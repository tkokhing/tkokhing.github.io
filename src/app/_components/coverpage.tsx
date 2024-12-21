import Container from "@/app/_components/container";

export default function Index() {
  return (
    <main>
      <Container>
        <header>
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-600 dark:text-inherit">My Story</h1>
          </div>
        </header>
        <div className="space-y-6 py-8 text-base leading-7 text-gray-600 dark:text-inherit">
          <p>Fell in love in programming when I first crosspath with it back in polytechnic during the 90s. Had fair amount of chances to nurture it, during Uni and some projects in the military. Now that I retired after serving for more than two decades, so here I come...</p>
          <h1><strong>Changes that I observed</strong></h1>	
          <h1>Well ...</h1>	
          <ul className="space-y-4 ml-4">
          <p>1. Programming or coding - Nobody called it coding back then, or at least not where I am from LOL.</p>
          <p>2. Good program is called "strong algorithm" then.</p>
          <p>3. Scripts are owned - You can even sell it and definitely there isn't GitHub, GitLab, Bitbucket or ...</p>
          <p>4. Learning has becomes a breeze - besides the above, there are YouTube and more! You even need to pay to get a IDE!</p>
          <p>5. Colourful IDE - Simply love this. It was all plaintext mono-colour. Missing a bracket, GBY!</p>
          <p>6. Syntax - Learned python on my own and I simply wonder why do we still need to end with a ";" these days?!?</p>
          </ul>
        </div>
        <p>Learning never stops 🏃!</p>

      </Container>
    </main>
  );
}

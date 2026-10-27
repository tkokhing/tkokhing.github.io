import Container from "@/app/_components/preference/container";
import { PostBody } from "@/app/_components/post_gen/post-body";

export default function Index() {

  return (
    <main>
      <Container>
        <PostBody
          content={`          
          # THIS IS FOR LOGIC TESTING
          
          **Tests**:

          1. Test 1a. 
          2. Test 2a. 
          3. Test 2b & 2c). 
          `}
        />
      </Container>
    </main>
  );
}

import { setupServer } from "msw/node";
const server = setupServer()
server.listen()

export default function Home() {
  return (
    <div>
      hello
    </div>
  );
}

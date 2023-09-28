import Button from "./components/Button";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Button variant="default" />
      <Button variant="alternative">
        <h4 className="font-bold text-xl">Hello</h4>
      </Button>
    </>
  );
}

export default App;

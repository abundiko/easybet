import LoginForm from "./LoginForm";

export default function Page() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2">
      <div className="flex items-center justify-center min-h-[90vh] px-4">
        <LoginForm />
      </div>
      <div className="flex items-center justify-center h-[90vh] bg-yellow-100 max-md:hidden"></div>
    </section>
  );
}

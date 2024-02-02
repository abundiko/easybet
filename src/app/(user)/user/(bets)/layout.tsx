import AllBetsHeader from "./AllBetHeader";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <AllBetsHeader />
      {children}
    </div>
  );
}

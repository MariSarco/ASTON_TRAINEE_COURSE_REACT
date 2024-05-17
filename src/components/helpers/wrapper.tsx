import { Header } from "../Header/header";
import { Footer } from "../Footer/footer";

interface Props {
  children: React.ReactNode;
  isLoading: boolean;
}

export function Wrapper({ children, isLoading }: Props) {
  return (
    <>
      {isLoading && <div className="text-white text-xl font-bold">Loading</div>}
      {!isLoading && (
        <>
          <Header />
          <main className="container mx-auto px-4 flex-1 flex flex-col">
            {children}
          </main>
          <Footer />
        </>
      )}
    </>
  );
}

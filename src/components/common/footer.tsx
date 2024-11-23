export function Footer() {
  return (
    <footer className="sticky bottom-0 flex items-center justify-center border-t bg-background/80 backdrop-blur">
      <p className="py-2 text-muted-foreground text-xs">
        Developed by{' '}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://soheilghanbary.ir"
          className="font-medium text-foreground underline decoration-wavy underline-offset-4"
        >
          Soheil Ghanbary
        </a>
      </p>
    </footer>
  );
}

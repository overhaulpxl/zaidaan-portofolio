import React from "react";

export function Footer() {
  return (
    <footer className="border-t border-glass-border py-12 px-4 md:px-8 text-center text-sm text-foreground/50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div>© {new Date().getFullYear()} Zaidaan Zalfaa. All rights reserved.</div>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-foreground transition-colors">GitHub</a>
          <a href="#" className="hover:text-foreground transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-foreground transition-colors">Linktree</a>
        </div>
      </div>
    </footer>
  );
}

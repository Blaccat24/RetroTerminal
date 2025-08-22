import { Link } from 'wouter';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-neon-cyan/30 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="font-courier text-sm text-gray-400 mb-4 md:mb-0" data-testid="copyright">
            © 2024 NEON_CITY.EXE | All Rights Reserved
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-neon-cyan hover:text-white transition-colors" data-testid="link-privacy">
              Privacy Policy
            </a>
            <a href="#" className="text-electric-magenta hover:text-white transition-colors" data-testid="link-terms">
              Terms of Service
            </a>
            <Link href="/404" className="text-neon-green hover:text-white transition-colors" data-testid="link-404">
              404 Terminal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

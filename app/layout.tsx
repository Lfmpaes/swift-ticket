import Header from './components/Header';
import './globals.css';

export const metadata = {
    title: 'Swift Ticket',
    description: 'ST by Lfmpaes',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pt-br">
            <Header />
            {children}
        </html>
    );
}

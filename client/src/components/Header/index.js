import React from 'react';
import Nav from '../Nav';

export default function Header() {
    return (
<header className="bg-secondary mb-4 py-2 flex-row align-center head">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
            <h2>
                TicketManager
            </h2>
                <Nav />
                </div>
    </header>
);
}
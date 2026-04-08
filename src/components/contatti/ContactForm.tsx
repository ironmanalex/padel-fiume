"use client";

import { useState, FormEvent } from "react";
import { FORMSPREE_ENDPOINT } from "@/lib/constants";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <p className="text-green-800 font-heading font-semibold text-lg">
          Messaggio inviato con successo!
        </p>
        <p className="text-green-600 mt-2">Ti risponderemo al più presto.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Nome *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
          />
        </div>
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium mb-1">
          Telefono
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">
          Messaggio *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-vertical"
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="bg-primary text-dark px-8 py-3 rounded-full font-heading font-semibold text-sm uppercase tracking-wider hover:bg-primary-dark transition-colors disabled:opacity-50"
      >
        {status === "sending" ? "Invio in corso..." : "Invia messaggio"}
      </button>
      {status === "error" && (
        <p className="text-red-600 text-sm">
          Errore nell&apos;invio. Riprova o contattaci telefonicamente.
        </p>
      )}
    </form>
  );
}

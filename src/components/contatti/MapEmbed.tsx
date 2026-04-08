export function MapEmbed() {
  return (
    <div className="rounded-2xl overflow-hidden h-[300px] md:h-[400px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2779.5!2d12.7339!3d45.9267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477943f6e43c0001%3A0x0!2sDICA+Padel+Center!5e0!3m2!1sit!2sit"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="DICA Padel Center - Mappa"
      />
    </div>
  );
}

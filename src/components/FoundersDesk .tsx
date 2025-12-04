import ownerImg from "@/assets/owner.jpg";

export const FoundersDesk = () => {
  return (
    <section id="foundersDesk" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Founder’s Desk
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A note from the heart that shaped our journey
          </p>
        </div>

        {/* Main layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* IMAGE FIRST on mobile */}
          <div className="order-1 lg:order-2 flex justify-center">
            <img
              src={ownerImg}
              alt="Founder"
              className="w-full max-w-md h-auto rounded-2xl shadow-xl object-cover"
            />
          </div>

          {/* TEXT */}
          <div className="order-2 lg:order-1 text-lg leading-relaxed text-foreground">

            <p className="mb-6">
              With more than a decade of experience in the food and hospitality
              industry, we set out with a simple belief — that great food
              creates unforgettable moments.
            </p>

            <p className="mb-6">
              What began as a small catering unit has grown into a trusted name
              loved by families and corporates alike. Today, we proudly curate
              events ranging from intimate home functions to large-scale wedding
              celebrations, always ensuring that quality and warmth remain at
              the heart of what we do.
            </p>

            <p className="mb-6">
              Our culinary strength lies in serving authentic
              <strong> Chettinad flavours</strong>, rich
              <strong> South Indian traditional meals</strong>, and
              modern <strong> Continental dishes</strong> crafted by skilled
              chefs. Every dish is prepared with care, fresh ingredients, and a
              commitment to hygiene that our clients deeply value.
            </p>

            <p className="mb-6">
              Whether it’s a corporate gathering, a wedding, or a milestone
              celebration, we promise thoughtful planning, exceptional taste,
              and seamless service — so you can enjoy your event, stress-free.
            </p>

            <p className="italic text-primary font-semibold mt-8">
              “Food tastes best when it carries a feeling — and that’s what we
              aspire to deliver in every plate.”
            </p>

            {/* Founder details */}
            <div className="mt-10">
              <p className="text-2xl font-bold">Jas Milton</p>
              <p className="text-muted-foreground">Proprietor</p>
              {/* <p className="mt-1 font-medium">
                +91 97107 71155 &nbsp; | &nbsp; +91 97107 70055
              </p> */}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

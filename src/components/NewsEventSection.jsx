import React from "react";

const NewsEventSection = () => {
  const newsEvents = [
    {
      img: "https://ext.same-assets.com/993979730/151838170.jpeg",
      date: "March 29, 2020",
      author: "Deo Admin",
      title: "How Roofing Charge for Their Services Asking the Right Questions",
      excerpt:
        "The goal of this new editor is to make adding rich content to WordPress simple and enjoyable.",
      link: "#",
    },
    {
      img: "https://ext.same-assets.com/993979730/305870256.jpeg",
      date: "March 29, 2020",
      author: "Deo Admin",
      title: "How Roofing Charge for Their Services Asking the Right Questions",
      excerpt:
        "The goal of this new editor is to make adding rich content to WordPress simple and enjoyable.",
      link: "#",
    },
    {
      img: "https://ext.same-assets.com/993979730/979530461.jpeg",
      date: "March 29, 2020",
      author: "Deo Admin",
      title: "How Roofing Charge for Their Services Asking the Right Questions",
      excerpt:
        "The goal of this new editor is to make adding rich content to WordPress simple and enjoyable.",
      link: "#",
    },
  ];

  return (
    <section id="news" className="relative bg-white pt-14 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-7">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold uppercase text-[#2d2f32] mb-2 font-dm-serif">
              News & Event
            </h2>
            <p className="text-[#939698] max-w-xl font-inter">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form
            </p>
          </div>
          <a
            href="#"
            className="inline-block bg-[#8e6136] hover:bg-[#a18c5d] text-white font-medium py-2 px-7 rounded shadow text-xs uppercase tracking-wide transition-colors border-2 border-[#8e6136] hover:border-[#a18c5d] mt-4 md:mt-0 font-inter"
          >
            View All Post
          </a>
        </div>
        {/* Blog cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {newsEvents.map((item) => (
            <div
              key={item.title + item.img}
              className="bg-[#f9f8f7] border rounded-2xl shadow hover:shadow-lg transition-shadow group overflow-hidden flex flex-col h-full"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="flex-1 p-5 flex flex-col">
                <div className="flex items-center justify-between text-xs text-[#b7a69c] mb-2 font-inter">
                  <span>{item.date}</span>
                  <span>
                    By <span className="text-[#8e6136]">{item.author}</span>
                  </span>
                </div>
                <a
                  href={item.link}
                  className="font-semibold text-base text-[#2d2f32] group-hover:text-[#8e6136] leading-tight mb-2 line-clamp-2 font-inter"
                >
                  {item.title}
                </a>
                <div className="text-sm text-[#939698] mb-4 line-clamp-2 font-inter">
                  {item.excerpt}
                </div>
                <a
                  href={item.link}
                  className="mt-auto inline-flex items-center text-[#8e6136] font-semibold text-sm hover:underline font-inter"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsEventSection;

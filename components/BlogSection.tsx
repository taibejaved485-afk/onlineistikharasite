
import React from 'react';

interface BlogSectionProps {
  blogs: any[];
}

const BlogSection: React.FC<BlogSectionProps> = ({ blogs }) => {
  if (blogs.length === 0) {
    return (
      <section id="blogs-section" className="py-20 bg-[#fcfdfa] text-center border-t border-gray-100 scroll-mt-24">
        <div className="container mx-auto px-6">
          <h2 className="text-[#064e3b] font-serif-display text-4xl font-bold mb-4">Latest Spiritual Insights</h2>
          <div className="h-1 w-20 bg-[#daa520] mx-auto mb-10 rounded-full" />
          <p className="text-gray-400 italic text-lg font-amiri">Naye blogs jald aa rahe hain... Hum jald hi mazeed rohani maloomat share karenge.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="blogs-section" className="py-24 bg-[#fcfdfa] islamic-pattern scroll-mt-24">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-[#064e3b] font-serif-display text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Latest <span className="text-[#daa520]">Blogs</span> & Insights
          </h2>
          <p className="text-[#daa520] font-amiri text-2xl tracking-widest uppercase opacity-80">Irfan-o-Aagahi</p>
          <div className="h-1 w-24 bg-[#daa520] mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((blog, idx) => (
            <div 
              key={blog.id} 
              className="group bg-white rounded-[40px] overflow-hidden border border-gray-100 shadow-[0_15px_50px_rgba(0,0,0,0.03)] hover:shadow-[0_25px_70px_rgba(6,78,59,0.12)] transition-all duration-500 hover:-translate-y-3"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Image with Category Badge */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={blog.img || 'https://i.pinimg.com/736x/0e/e1/27/0ee127623546030a9c820a0ee7412e32.jpg'} 
                  alt={blog.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute top-6 left-6">
                  <span className="bg-[#daa520] text-[#064e3b] px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-xl border border-white/20">
                    {blog.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Card Content */}
              <div className="p-10">
                <div className="flex items-center gap-3 mb-4">
                   <div className="w-1.5 h-1.5 rounded-full bg-[#daa520]" />
                   <p className="text-[#daa520]/80 text-xs font-bold uppercase tracking-[0.2em]">{blog.date}</p>
                </div>
                
                <h3 className="text-[#064e3b] font-serif-display text-2xl font-bold mb-4 group-hover:text-[#daa520] transition-colors line-clamp-2 leading-snug min-h-[64px]">
                  {blog.title}
                </h3>
                
                <p className="text-gray-500 font-lora text-sm line-clamp-3 mb-10 leading-relaxed italic">
                  {blog.content}
                </p>
                
                <button className="w-full py-4.5 bg-[#064e3b] text-white rounded-2xl font-serif-display font-bold text-sm tracking-widest uppercase hover:bg-[#daa520] hover:text-[#064e3b] transition-all duration-300 flex items-center justify-center gap-3 group/btn shadow-lg">
                  Read Full Post
                  <i className="fa-solid fa-arrow-right-long group-hover/btn:translate-x-2 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative Bottom Pattern */}
        <div className="mt-20 flex justify-center opacity-10">
           <i className="fa-solid fa-star-and-crescent text-4xl text-[#064e3b]" />
        </div>
      </div>
    </section>
  );
};

export default BlogSection;

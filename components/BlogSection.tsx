
import React, { useState, useMemo } from 'react';

interface BlogSectionProps {
  blogs: any[];
}

const CATEGORIES = ["All", "Istikhara", "Wazaif", "Jadu ka Tor", "Nuri Ilaj", "Miscellaneous"];

const BlogSection: React.FC<BlogSectionProps> = ({ blogs }) => {
  const [selectedBlog, setSelectedBlog] = useState<any | null>(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const openBlog = (blog: any) => {
    setSelectedBlog(blog);
    document.body.style.overflow = 'hidden'; 
  };

  const closeBlog = () => {
    setSelectedBlog(null);
    document.body.style.overflow = 'auto'; 
  };

  // Filtering Logic
  const filteredBlogs = useMemo(() => {
    if (activeFilter === "All") return blogs;
    return blogs.filter(blog => blog.category === activeFilter);
  }, [blogs, activeFilter]);

  const stripHtml = (html: string) => {
    const tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  };

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
        <div className="text-center mb-10 animate-fade-in-up">
          <h2 className="text-[#064e3b] font-serif-display text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Latest <span className="text-[#daa520]">Blogs</span> & Insights
          </h2>
          <p className="text-[#daa520] font-amiri text-2xl tracking-widest uppercase opacity-80">Irfan-o-Aagahi</p>
          <div className="h-1 w-24 bg-[#daa520] mx-auto mt-6 rounded-full" />
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-16 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-6 py-2.5 rounded-full font-serif-display font-bold text-sm tracking-widest uppercase transition-all duration-300 border-2 ${
                activeFilter === cat 
                ? 'bg-[#daa520] border-[#daa520] text-[#064e3b] shadow-lg scale-105' 
                : 'bg-white border-gray-100 text-[#064e3b]/60 hover:border-[#daa520]/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {filteredBlogs.length === 0 ? (
          <div className="text-center py-20 bg-white/50 rounded-[40px] border-2 border-dashed border-gray-100">
             <i className="fa-solid fa-folder-open text-gray-200 text-6xl mb-6" />
             <p className="text-gray-400 italic text-xl">Is category mein filhaal koi blog nahi hai.</p>
             <button onClick={() => setActiveFilter("All")} className="mt-6 text-[#daa520] font-bold underline hover:text-[#064e3b]">Show All Blogs</button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredBlogs.map((blog, idx) => (
              <div 
                key={blog.id} 
                className="group bg-white rounded-[40px] overflow-hidden border border-gray-100 shadow-[0_15px_50px_rgba(0,0,0,0.03)] hover:shadow-[0_25px_70px_rgba(6,78,59,0.12)] transition-all duration-500 hover:-translate-y-3"
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                {/* Image with Category Badge */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={blog.img || 'https://i.pinimg.com/736x/0e/e1/27/0ee127623546030a9c820a0ee7412e32.jpg'} 
                    alt={blog.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
                  />
                  {/* Category Label (Requested Color #fbbf24) */}
                  <div className="absolute top-6 left-6">
                    <span className="bg-[#fbbf24] text-[#064e3b] px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-xl border border-white/20">
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
                    {stripHtml(blog.content)}
                  </p>
                  
                  <button 
                    onClick={() => openBlog(blog)}
                    className="w-full py-4.5 bg-[#064e3b] text-white rounded-2xl font-serif-display font-bold text-sm tracking-widest uppercase hover:bg-[#daa520] hover:text-[#064e3b] transition-all duration-300 flex items-center justify-center gap-3 group/btn shadow-lg"
                  >
                    Read Full Post
                    <i className="fa-solid fa-arrow-right-long group-hover/btn:translate-x-2 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Full Blog Modal */}
        {selectedBlog && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8">
            <div 
              className="absolute inset-0 bg-[#064e3b]/90 backdrop-blur-md" 
              onClick={closeBlog}
            />
            <div className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-[40px] shadow-2xl overflow-y-auto animate-fade-in-up border-2 border-[#daa520]/20">
              
              <button 
                onClick={closeBlog}
                className="absolute top-6 right-6 z-10 w-12 h-12 bg-white/80 hover:bg-[#daa520] text-[#064e3b] rounded-full flex items-center justify-center shadow-lg transition-all active:scale-90"
              >
                <i className="fa-solid fa-xmark text-xl" />
              </button>

              <div className="relative h-64 md:h-[400px] w-full">
                <img 
                  src={selectedBlog.img || 'https://i.pinimg.com/736x/0e/e1/27/0ee127623546030a9c820a0ee7412e32.jpg'} 
                  className="w-full h-full object-cover"
                  alt={selectedBlog.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                <div className="absolute bottom-6 left-10">
                   <span className="bg-[#fbbf24] text-[#064e3b] px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-xl">
                    {selectedBlog.category}
                  </span>
                </div>
              </div>

              <div className="p-8 md:p-16 pt-0">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-2 h-2 rounded-full bg-[#daa520]" />
                  <p className="text-[#daa520] font-bold uppercase tracking-widest text-sm">{selectedBlog.date}</p>
                </div>

                <h2 className="text-[#064e3b] font-serif-display text-3xl md:text-5xl font-bold mb-10 leading-tight">
                  {selectedBlog.title}
                </h2>

                <div 
                  className="blog-prose font-lora text-lg md:text-xl text-gray-700 leading-loose"
                  dangerouslySetInnerHTML={{ __html: selectedBlog.content }}
                />

                <div className="mt-16 pt-10 border-t border-gray-100 flex flex-col items-center">
                   <i className="fa-solid fa-star-and-crescent text-[#daa520] text-3xl mb-6 opacity-40" />
                   <p className="text-[#064e3b]/50 font-amiri text-xl italic tracking-widest uppercase">Noor Emerald Spiritual Guidance</p>
                   <button 
                    onClick={closeBlog}
                    className="mt-10 px-10 py-4 bg-[#064e3b] text-white rounded-full font-bold uppercase tracking-widest hover:bg-[#daa520] hover:text-[#064e3b] transition-all shadow-xl"
                   >
                     Close Article
                   </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogSection;

'use client';
import Link from "next/link";
import { useState, useEffect } from 'react';

  
  
  export default function Home() {
    const [allNews, setAllNews] = useState([]);
    
    useEffect(() => {
      const cargarNoticiasDesdeAPI = async () => {
        try {
          const response = await fetch('https://examenapis.onrender.com/api/mascotas');
          if (response.ok) {
            const noticiasDelAPI = await response.json();
            setAllNews([noticiasDelAPI]);
          } else {
            console.error('Error en la respuesta de la API:', response.status);
          }
        } catch (error) {
          console.error('Error cargando noticias desde API:', error);
          // Usar las noticias por defecto si falla
          setAllNews(news);
        }
      };
      cargarNoticiasDesdeAPI();
    }, []);
    
    const latestNews = [...allNews]
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 3);
    

  return (
    <div className="container mx-auto px-4 py-8">
      <main className="text-center">
        <h1 className="text-5xl font-bold text-yellow-800 mb-8">
          MASCOTAS
        </h1>
        <p className="text-lg text-gray-700 mb-12">
          Mantente al día con las últimas noticias del mundo avícola
        </p>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-yellow-700 mb-6">
            Últimas Noticias
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestNews.map((noticia, index) => (
              <Link
                key={index}
                href={`/notihuevo/${noticia.id}`}
                className="block"
              >
                <article
                  key={index}
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                >
                  <img
                    src={noticia.img}
                    alt={noticia.name}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <h3 className="text-xl font-semibold text-yellow-700 mb-3">
                    {noticia.type}
                  </h3>
                  <p className="text-gray-600 mb-4">{noticia.description}</p>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>{noticia.raze}</span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

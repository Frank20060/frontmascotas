"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import MascotaCard from "../../../components/MascotaCard";

export default function Home() {
  const [mascotas, setMascotas] = useState([]);
  const [loading, setLoading] = useState(true);

  const sacarMascotas = async () => {
    try {
      const res = await fetch("https://examenapis.onrender.com/api/mascotas");
      const data = await res.json();
      setMascotas(data);
    } catch (error) {
      console.error("Error al obtener mascotas:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    sacarMascotas();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <main>
        <h1 className="text-5xl font-bold text-yellow-800 mb-8 text-center">
          MASCOTAS
        </h1>

        {loading ? (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600">Cargando mascotas...</p>
          </div>
        ) : mascotas.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600">No hay mascotas disponibles</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mascotas.map((mascota) => (
              <MascotaCard key={mascota._id} mascota={mascota} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

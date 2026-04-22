import Link from "next/link";

export default function MascotaCard({ mascota }) {
  return (
    <Link href={`/Mascotas/${mascota._id}`}>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer h-full">
        {/* Imagen */}
        <div className="w-full h-48 bg-gray-200 overflow-hidden">
          <img
            src={
              mascota.img ||
              "https://via.placeholder.com/300x200?text=Sin+Imagen"
            }
            alt={mascota.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Contenido */}
        <div className="p-4">
          <h2 className="text-xl font-bold text-gray-800 mb-2">
            {mascota.name}
          </h2>

          <div className="space-y-2">
            <p className="text-sm text-gray-600">
              <span className="font-semibold">Tipo:</span> {mascota.type}
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-semibold">Raza:</span> {mascota.raze}
            </p>
          </div>

          <div className="mt-4 pt-4 border-t border-gray-200">
            <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 rounded transition-colors duration-200">
              Ver Detalles
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}

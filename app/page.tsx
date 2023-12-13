'use client'
import { Form } from "@/app/form"

export default function Home() {
  const transformarUrlToCode = async (url: string) => {
    const res = await fetch('/api/generate-code-from-image', {
      method: 'POST',
      body: JSON.stringify({ url }),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!res.ok || res.body == null) {
			throw new Error('Error al generar el código')
    }

    // Lectura del streaming

    const reader = res.body.getReader()
    const decoder = new TextDecoder()

    while (true) {
      const { done, value } = await reader.read()
      const chunk = decoder.decode(value)
      console.log(chunk)
      if (done) break
    }
  }

  return (
    <div className=" grid grid-cols-[400px_1fr]">
      <aside className=" bg-black-1000 flex flex-col justify-between min-h-screen p-4">
        <header className="text-center">
          <h1 className=" text-3xl font-semibold">
            IMAGE TO{" "}
            <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-indigo-500 relative inline-block">
              <span className="relative text-white">CODE</span>
            </span>
          </h1>
          <h2 className="mt-1 text-gray-300">
            Pasa tus imagenes a codigo en segundos
          </h2>
        </header>

        <section className="text-center">Aqui iran los filtros...</section>
        <footer className=" text-center text-gray-500 ">
          Desarrollado por Anothher
        </footer>
      </aside>
      <main className=" bg-gray-900">
        <section className=" max-w-2xl mx-auto bg-red-10 my-3 mx-4">
          <Form transformarUrlToCode={transformarUrlToCode} />
        </section>
        <section>
          <p className="max-w-2xl mx-auto my-3 mx-4 border border-sky-500">
            hola d mar
          </p>
        </section>
      </main>
    </div>
  )
}

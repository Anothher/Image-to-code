"use client"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export const Form = ({ transformarUrlToCode }: { transformarUrlToCode: (url: string) => void }) => {
	return (
		<form
			className="flex flex-col gap-4"
			onSubmit={(evt) => {
				evt.preventDefault()

				const form = evt.currentTarget as HTMLFormElement
				const url = form.elements.namedItem('url') as HTMLInputElement

				transformarUrlToCode(url.value)
			}}
    >
      <Label htmlFor="url" className="mx-1">
        Introduce tu URL de la imagen:
      </Label>
      <Input
        className="my-1"
        name="url"
        id="url"
        type="url"
        placeholder="https://tu-screenshot/image.jpg"
      />
      <Button className=" mx-1 my-1 opacity-97 shadow-lg shadow-indigo-500/30 bg-zinc-100 hover:shadow-blue-450/30  ">
        Generar codigo de la imagen
      </Button>
    </form>
  ) 
}

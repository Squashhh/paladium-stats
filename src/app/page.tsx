import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"


export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center flex-col">
      <Card>
        <CardHeader>
          <CardTitle>🔧 Paladium Stats</CardTitle>
          <CardDescription>Votre nouvel outil pour une meilleure expérience de jeux. Choisissez une catégorie parmi celles-ci-dessous :</CardDescription>
          <CardDescription className="text-yellow-500">⚠️Le site est encore en version Bêta, il n'est donc pas encore optimisé et ne convient pas à certaines tailles d'écran.</CardDescription>
        </CardHeader>
        <CardContent>
        <a href="https://paladium-stats.vercel.app/jobs"><Button variant="secondary">Vos niveaux de métiers</Button></a>
        </CardContent>
        <CardFooter>
          <div className="w-full">
            <p className="text-white text-center py-4">Made with ❤️ by <a href="https://github.com/Squashhh">
              <Button variant="link">Squash</Button>
            </a>
            </p>
          </div>
        </CardFooter>
      </Card>
    </main>

  );
}

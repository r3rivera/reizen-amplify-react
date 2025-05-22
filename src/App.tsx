import WordClouds from "./components/hero/WordClouds";
import ClickLogo from "./components/shared/ClickLogo.tsx";

function App() {

  return (
    <div className="relative isolate overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-10 sm:pb-4 lg:flex lg:px-8 lg:py-43">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:shrink-0 lg:pt-8">
            <span className="flex center">
              <ClickLogo altName="R2 Rivera" sourceUrl="/R2Logo.jpg" targetUrl="/control-panel" isClickable={true} className="h-20 lg:h-26 pt-3"/>
              <div className="mt-5 text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-7xl h-20 md:h-25">
              |2 Rivera
              </div>
            </span>

            <p className="mt-2 text-lg font-medium text-pretty text-gray-500 text-1xl md:text-3xl">
                Full Stack Software Engineer | AWS Certified Solutions Architect 
            </p>
            <div>

            </div>
        </div>
        <div className="hidden sm:block mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:mt-0 lg:mr-0 lg:ml-10 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <div className="-m-2 rounded-xl ring-inset lg:-m-4 lg:rounded-2xl lg:p-4">
              <WordClouds height={600} width={800} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

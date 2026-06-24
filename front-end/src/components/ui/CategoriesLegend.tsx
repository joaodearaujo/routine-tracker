import { CATEGORY_COLORS } from "@/constants/categoryColors"
import { Dot } from "@/components/ui/Dot"

export function CategoriesLegend() {
    return (
            <div className='rounded-xl bg-surface2 pb-1 w-full'>   
              <div className="text-muted text-xs uppercase flex gap-4 justify-around bg-surface rounded-xl font-secondary p-2 border-2 border-surface2 leading-none">
                <span>Categories:</span>

                  {Object.entries(CATEGORY_COLORS).map(([key, color]) => (
                      <div 
                        className='flex gap-2 items-center' 
                        key={key}
                      >
                        <Dot color={color}/> 
                        {key}
                      </div>
                   ))}            
              </div>
            </div>
    )
}
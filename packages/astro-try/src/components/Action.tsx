import { HumanCat } from '@knola-2/utils'

export default function Action({ humanCat }: { humanCat: HumanCat }) {
  return (
    <>
      <div>Could your humanCate meow ?
        <div className="font-semibold text-amber-800">

          {humanCat.couldMeow ? "Yes" : "No"}
        </div>
      </div>
      {humanCat.hasWhiskers !== undefined && (

        <div>Your humanCate has whiskers ?
          <div className="font-semibold text-amber-800">

            {humanCat.hasWhiskers ? "Yes" : "No"}
          </div>
        </div>
      )}
    </>
  )
}

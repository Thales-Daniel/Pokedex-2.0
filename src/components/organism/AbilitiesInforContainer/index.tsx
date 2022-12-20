import React, { useCallback, useEffect, useState } from "react"

import { AbilityButtonTypes } from "../../../shared/types/globalPropsTypes"
import { getAbility } from "../../../services/getPokemons"
import CloseAbilityButton from "../../atoms/CloseAbilityButton"
import {
  AbilitiesInforDiv,
  EffectContainerDiv,
  EffectP,
  EffectTittleH3,
  HeaderAbilities,
  TitleH4,
} from "./style"
import Loader from "../../atoms/Loader"
import { EffectTypes } from "../../../shared/types/effectTypes"

function AbilitiesInforContainer({
  abilityName,
  setOpenAbility,
}: AbilityButtonTypes) {
  const [effect, setEffect] = useState("")

  const getAbilityInfor = useCallback(async () => {
    if (abilityName) {
      const result: EffectTypes = await getAbility(abilityName)
      result?.effect_entries.map(({ language, short_effect: shortEffect }) => {
        if (language.name === "en") setEffect(shortEffect)
      })
    }
  }, [abilityName, getAbility, setEffect])

  useEffect(() => {
    getAbilityInfor()
  }, [getAbilityInfor])

  return (
    <AbilitiesInforDiv>
      <HeaderAbilities>
        <TitleH4>Ability Infor</TitleH4>
        <CloseAbilityButton setOpenAbility={setOpenAbility} />
      </HeaderAbilities>
      <EffectContainerDiv>
        <EffectTittleH3>{abilityName}</EffectTittleH3>
        {effect ? <EffectP>{effect}</EffectP> : <Loader />}
      </EffectContainerDiv>
    </AbilitiesInforDiv>
  )
}

export default AbilitiesInforContainer

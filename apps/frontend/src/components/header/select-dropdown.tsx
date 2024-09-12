import { Select } from "@kobalte/core/select"

export const SelectDropdown = () => {
    return (
        <Select
            options={["Apple", "Banana", "Blueberry", "Grapes", "Pineapple"]}
            placeholder="Homepage"
            itemComponent={props => (
                <Select.Item item={props.item} class="select__item p-1 text-sm">
                    <Select.ItemLabel>{props.item.rawValue}</Select.ItemLabel>
                    <Select.ItemIndicator class="select__item-indicator">

                    </Select.ItemIndicator>
                </Select.Item>
            )}
        >
            <Select.Trigger style="border-color: #E8E7E7;" class="min-w-[101px] h-[30px] border-2 rounded-sm text-sm space-x-2 items-center inline-flex justify-between px-2" aria-label="Fruit">
                <Select.Value>
                    {state => state.selectedOption()}
                </Select.Value>
                <Select.Icon class="select__icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 inline">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                </Select.Icon>
            </Select.Trigger>
            <Select.Portal>
                <Select.Content class="select__content bg-white" >
                    <Select.Listbox class="select__listbox p-2" />
                </Select.Content>
            </Select.Portal>
        </Select>
    )
}
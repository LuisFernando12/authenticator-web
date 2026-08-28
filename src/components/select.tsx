import * as React from 'react';

import {
    Combobox,
    ComboboxChip,
    ComboboxChips,
    ComboboxChipsInput,
    ComboboxContent,
    ComboboxEmpty,
    ComboboxInput,
    ComboboxItem,
    ComboboxList,
    ComboboxValue,
    useComboboxAnchor,
} from '@/components/ui/combobox';
import { cn } from '@/lib/utils';
export interface SelectProps extends Omit<React.ComponentProps<'select'>, 'onChange' | 'value'> {
    items: string[];
    type?: 'single' | 'multiple';
    value?: string | string[];
    className?: string;
    onChange?: (value: string | string[]) => void;
}
const MultipleSelect = ({ items, className, ...props }: Omit<SelectProps, 'type'>) => {
    const anchor = useComboboxAnchor();
    return (
        <Combobox
            multiple
            autoHighlight
            items={items}
            defaultValue={[items[0]]}
            onValueChange={(value) => props.onChange?.(value)}
            value={props.value as string[]}
        >
            <ComboboxChips ref={anchor} className={cn('w-full', className)}>
                <ComboboxValue>
                    {(values) => (
                        <React.Fragment>
                            {values.map((value: string) => (
                                <ComboboxChip key={value}>{value}</ComboboxChip>
                            ))}
                            <ComboboxChipsInput className="w-full" />
                        </React.Fragment>
                    )}
                </ComboboxValue>
            </ComboboxChips>
            <ComboboxContent anchor={anchor}>
                <ComboboxEmpty>No items found.</ComboboxEmpty>
                <ComboboxList>
                    {(item) => (
                        <ComboboxItem key={item} value={item}>
                            {item}
                        </ComboboxItem>
                    )}
                </ComboboxList>
            </ComboboxContent>
        </Combobox>
    );
};
const SingleSelect = ({ items, className, ...props }: Omit<SelectProps, 'type'>) => {
    return (
        <Combobox
            items={items}
            defaultValue={items[0]}
            onValueChange={(value) => props.onChange?.(value as string)}
            value={props.value as string}
        >
            <ComboboxInput placeholder="Select a value" showClear className={cn('w-full', className)} />
            <ComboboxContent>
                <ComboboxEmpty>No items found.</ComboboxEmpty>
                <ComboboxList>
                    {(item) => (
                        <ComboboxItem key={item} value={item}>
                            {item}
                        </ComboboxItem>
                    )}
                </ComboboxList>
            </ComboboxContent>
        </Combobox>
    );
};

export const Select = ({ type = 'multiple', ...props }: SelectProps) => {
    const defaultClases =
        'h-10 w-full min-w-0 bg-zinc-950/80 rounded-lg border border-zinc-800 px-3 py-2 text-sm text-zinc-100 placeholder:text-zinc-500 focus-visible:border-cyan-500/80 focus-visible:ring-1 focus-visible:ring-cyan-500/50 outline-none transition-all disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-red-500/80 aria-invalid:ring-1 aria-invalid:ring-red-500/30';
    return type === 'multiple' ? (
        <MultipleSelect items={props.items} className={defaultClases} onChange={props.onChange} value={props.value} />
    ) : (
        <SingleSelect items={props.items} className={defaultClases} onChange={props.onChange} value={props.value} />
    );
};

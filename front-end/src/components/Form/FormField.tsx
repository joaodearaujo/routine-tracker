export interface FormField {
    label: string;
    id: string;
    name: string;  
    placeholder: string;
    required: boolean;
    type: string;
    options?: {optionName: string; optionValue: string | number}[]
}

export function FormField({...field}: FormField) {
    return (
        <div className="flex flex-col items-start gap-1 font-secondary">
            <label
                className="text-md text-ink font-medium capitalize"
                htmlFor={field.id}
            >
                {field.label}
            </label>
            {field.type === 'select' ? (
                <select 
                    className="w-full bg-surface2 rounded-xl px-3 py-2 border border-surface2 placeholder:text-sm focus:outline-none text-semibold text-muted"
                    name={field.name}
                    id={field.id}
                >
                    {field.options?.map( option => (
                        <option 
                            className="w-full bg-surface2 rounded-xl px-3 py-2 border border-surface2 placeholder:text-sm focus:outline-none text-semibold text-muted"
                            value={option.optionValue}
                            key={option.optionName}
                        >
                            {option.optionName}
                        </option>
                    ))}
                </select>
            ) : (
                <input
                    placeholder={field.placeholder}
                    id={field.id}
                    name={field.name}
                    required={field.required}
                    className="w-full bg-surface2 rounded-xl px-3 py-2 border border-surface2 placeholder:text-sm focus:outline-none text-semibold text-muted"
                    type={field.type}
                />
            )}
        </div>
    )
}
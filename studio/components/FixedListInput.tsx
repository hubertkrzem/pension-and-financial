import type { ArrayOfObjectsInputProps, ObjectItemProps } from 'sanity'

/** Hides the "Add item" button so the array length is fixed. */
export function FixedArrayInput(props: ArrayOfObjectsInputProps) {
  return props.renderDefault({
    ...props,
    arrayFunctions: () => null,
  })
}

/** Hides the remove / delete action on each list item. */
export function FixedItemInput(props: ObjectItemProps) {
  return props.renderDefault({
    ...props,
    onRemove: () => {},
  })
}

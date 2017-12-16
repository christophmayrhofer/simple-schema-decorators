import SimpleSchema from 'simpl-schema'
import SchemaDecorators, {Schema} from 'schema-decorators'

export default abstract class SimpleSchemaDecorators extends SchemaDecorators {
    static schemaClass: Function = SimpleSchema

    static attachSchema(constructor: any, schema: Schema) {
        if(schema instanceof SimpleSchema && constructor.$collection && typeof constructor.$collection.attachSchema === 'function') {
            constructor.$collection.attachSchema(schema)
        }
    }

    static Custom(key: string, value: any) {
        return SchemaDecorators.extendSchema(key, value)
    }

    static Min(value: number) {
        return SchemaDecorators.extendSchema('min', value)
    }

    static Max(value: number) {
        return SchemaDecorators.extendSchema('max', value)
    }
}

export let Custom = SimpleSchemaDecorators.Custom
export let Min = SimpleSchemaDecorators.Min
export let Max = SimpleSchemaDecorators.Max
// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
    [KeyType in keyof T]: T[KeyType];
};
/** Content for Home documents */
type HomeDocumentData = Record<string, never>;
/**
 * Home document from Prismic
 *
 * - **API ID**: `home`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomeDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<HomeDocumentData>, "home", Lang>;
export type AllDocumentTypes = HomeDocument;
/**
 * Primary content in FirstSlice → Primary
 *
 */
interface FirstSliceSliceDefaultPrimary {
    /**
     * Testing Slices field in *FirstSlice → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: first_slice.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Description of this test field in *FirstSlice → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: A nice description of your feature
     * - **API ID Path**: first_slice.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
    /**
     * testImage field in *FirstSlice → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: first_slice.primary.testimage
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    testimage: prismicT.ImageField<never>;
}
/**
 * Default variation for FirstSlice Slice
 *
 * - **API ID**: `default`
 * - **Description**: `FirstSlice`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type FirstSliceSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<FirstSliceSliceDefaultPrimary>, never>;
/**
 * Slice variation for *FirstSlice*
 *
 */
type FirstSliceSliceVariation = FirstSliceSliceDefault;
/**
 * FirstSlice Shared Slice
 *
 * - **API ID**: `first_slice`
 * - **Description**: `FirstSlice`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type FirstSliceSlice = prismicT.SharedSlice<"first_slice", FirstSliceSliceVariation>;
declare module "@prismicio/client" {
    interface CreateClient {
        (repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
    }
    namespace Content {
        export type { HomeDocumentData, HomeDocument, AllDocumentTypes, FirstSliceSliceDefaultPrimary, FirstSliceSliceDefault, FirstSliceSliceVariation, FirstSliceSlice };
    }
}
// generated using https://www.graphql-code-generator.com/
export type ObjectId = string;
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    ObjectId: any;
};

export type Geojson_Checksum_Normalized_Model_ObjectiveQueryInput = {
    other_objectives_ne?: InputMaybe<Scalars['String']>;
    other_objectives_exists?: InputMaybe<Scalars['Boolean']>;
    other_objectives_gt?: InputMaybe<Scalars['String']>;
    other_objectives_lt?: InputMaybe<Scalars['String']>;
    other_objectives_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    other_objectives_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    other_objectives?: InputMaybe<Scalars['String']>;
    other_objectives_lte?: InputMaybe<Scalars['String']>;
    other_objectives_gte?: InputMaybe<Scalars['String']>;
    AND?: InputMaybe<Array<Geojson_Checksum_Normalized_Model_ObjectiveQueryInput>>;
    OR?: InputMaybe<Array<Geojson_Checksum_Normalized_Model_ObjectiveQueryInput>>;
};

export type Geojson_Checksum_Normalized_Time_Series_ResultQueryInput = {
    ValueCount_lt?: InputMaybe<Scalars['String']>;
    UnitsAbbreviation_exists?: InputMaybe<Scalars['Boolean']>;
    timeSeriesResultUUID_gte?: InputMaybe<Scalars['String']>;
    ValueCount_exists?: InputMaybe<Scalars['Boolean']>;
    AggregationStatistic_gt?: InputMaybe<Scalars['String']>;
    Status_lte?: InputMaybe<Scalars['String']>;
    UnitsType_lte?: InputMaybe<Scalars['String']>;
    SampleMedium_ne?: InputMaybe<Scalars['String']>;
    UnitsName_lte?: InputMaybe<Scalars['String']>;
    UnitsAbbreviation_lte?: InputMaybe<Scalars['String']>;
    UnitsAbbreviation?: InputMaybe<Scalars['String']>;
    SampleMedium_gte?: InputMaybe<Scalars['String']>;
    Status_gte?: InputMaybe<Scalars['String']>;
    UnitsType_exists?: InputMaybe<Scalars['Boolean']>;
    ValueCount_gte?: InputMaybe<Scalars['String']>;
    ValueCount_lte?: InputMaybe<Scalars['String']>;
    AggregationStatistic_ne?: InputMaybe<Scalars['String']>;
    AggregationStatistic_exists?: InputMaybe<Scalars['Boolean']>;
    UnitsType_lt?: InputMaybe<Scalars['String']>;
    UnitsType_gt?: InputMaybe<Scalars['String']>;
    Status_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    UnitsAbbreviation_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    ValueCount_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    timeSeriesResultUUID_lte?: InputMaybe<Scalars['String']>;
    UnitsName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    UnitsAbbreviation_gte?: InputMaybe<Scalars['String']>;
    SampleMedium?: InputMaybe<Scalars['String']>;
    ValueCount_ne?: InputMaybe<Scalars['String']>;
    Status_ne?: InputMaybe<Scalars['String']>;
    timeSeriesResultUUID?: InputMaybe<Scalars['String']>;
    timeSeriesResultUUID_ne?: InputMaybe<Scalars['String']>;
    UnitsName_exists?: InputMaybe<Scalars['Boolean']>;
    SampleMedium_gt?: InputMaybe<Scalars['String']>;
    AggregationStatistic_lte?: InputMaybe<Scalars['String']>;
    Status_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    timeSeriesResultUUID_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    UnitsAbbreviation_gt?: InputMaybe<Scalars['String']>;
    AggregationStatistic?: InputMaybe<Scalars['String']>;
    UnitsName?: InputMaybe<Scalars['String']>;
    ValueCount_gt?: InputMaybe<Scalars['String']>;
    UnitsName_gte?: InputMaybe<Scalars['String']>;
    UnitsName_lt?: InputMaybe<Scalars['String']>;
    UnitsAbbreviation_ne?: InputMaybe<Scalars['String']>;
    UnitsName_gt?: InputMaybe<Scalars['String']>;
    timeSeriesResultUUID_gt?: InputMaybe<Scalars['String']>;
    Status?: InputMaybe<Scalars['String']>;
    UnitsType?: InputMaybe<Scalars['String']>;
    ValueCount_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    AggregationStatistic_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    UnitsName_ne?: InputMaybe<Scalars['String']>;
    UnitsType_gte?: InputMaybe<Scalars['String']>;
    SampleMedium_exists?: InputMaybe<Scalars['Boolean']>;
    UnitsType_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    AND?: InputMaybe<Array<Geojson_Checksum_Normalized_Time_Series_ResultQueryInput>>;
    SampleMedium_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    timeSeriesResultUUID_exists?: InputMaybe<Scalars['Boolean']>;
    UnitsAbbreviation_lt?: InputMaybe<Scalars['String']>;
    UnitsAbbreviation_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    Status_lt?: InputMaybe<Scalars['String']>;
    UnitsType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    timeSeriesResultUUID_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    Status_gt?: InputMaybe<Scalars['String']>;
    ValueCount?: InputMaybe<Scalars['String']>;
    AggregationStatistic_gte?: InputMaybe<Scalars['String']>;
    AggregationStatistic_lt?: InputMaybe<Scalars['String']>;
    SampleMedium_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    UnitsName_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    UnitsType_ne?: InputMaybe<Scalars['String']>;
    AggregationStatistic_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    timeSeriesResultUUID_lt?: InputMaybe<Scalars['String']>;
    Status_exists?: InputMaybe<Scalars['Boolean']>;
    OR?: InputMaybe<Array<Geojson_Checksum_Normalized_Time_Series_ResultQueryInput>>;
    SampleMedium_lt?: InputMaybe<Scalars['String']>;
    SampleMedium_lte?: InputMaybe<Scalars['String']>;
};

export type Geojson_Checksum_Normalized_Time_Series_Result = {
    __typename?: 'Geojson_checksum_normalized_time_series_result';
    AggregationStatistic?: Maybe<Scalars['String']>;
    SampleMedium?: Maybe<Scalars['String']>;
    Status?: Maybe<Scalars['String']>;
    UnitsAbbreviation?: Maybe<Scalars['String']>;
    UnitsName?: Maybe<Scalars['String']>;
    UnitsType?: Maybe<Scalars['String']>;
    ValueCount?: Maybe<Scalars['String']>;
    timeSeriesResultUUID?: Maybe<Scalars['String']>;
};

export type Geojson_Checksum_NormalizedPeriod_Coverage = {
    __typename?: 'Geojson_checksum_normalizedPeriod_coverage';
    end?: Maybe<Scalars['String']>;
    start?: Maybe<Scalars['String']>;
};

export type Geojson_Checksum_Normalized_SiteQueryInput = {
    SiteName_ne?: InputMaybe<Scalars['String']>;
    Longitude_gte?: InputMaybe<Scalars['String']>;
    Longitude_ne?: InputMaybe<Scalars['String']>;
    ElevationDatum_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    Latitude_ne?: InputMaybe<Scalars['String']>;
    SiteCode_ne?: InputMaybe<Scalars['String']>;
    ElevationDatum_lte?: InputMaybe<Scalars['String']>;
    Latitude_gte?: InputMaybe<Scalars['String']>;
    Elevation_m_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    Latitude_gt?: InputMaybe<Scalars['String']>;
    timeSeriesResultUUID_exists?: InputMaybe<Scalars['Boolean']>;
    Elevation_m_gt?: InputMaybe<Scalars['String']>;
    SiteCode_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    timeSeriesResultUUID_gt?: InputMaybe<Scalars['String']>;
    SiteCode_lt?: InputMaybe<Scalars['String']>;
    SiteName_lte?: InputMaybe<Scalars['String']>;
    timeSeriesResultUUID_gte?: InputMaybe<Scalars['String']>;
    SiteType_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    SiteType?: InputMaybe<Scalars['String']>;
    Longitude?: InputMaybe<Scalars['String']>;
    SiteName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    Longitude_lte?: InputMaybe<Scalars['String']>;
    Latitude_exists?: InputMaybe<Scalars['Boolean']>;
    timeSeriesResultUUID_lt?: InputMaybe<Scalars['String']>;
    Latitude_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    Elevation_m_lt?: InputMaybe<Scalars['String']>;
    SiteType_gte?: InputMaybe<Scalars['String']>;
    Elevation_m?: InputMaybe<Scalars['String']>;
    SiteName_gte?: InputMaybe<Scalars['String']>;
    SiteName?: InputMaybe<Scalars['String']>;
    SiteType_ne?: InputMaybe<Scalars['String']>;
    SiteCode_gt?: InputMaybe<Scalars['String']>;
    SiteType_exists?: InputMaybe<Scalars['Boolean']>;
    Longitude_lt?: InputMaybe<Scalars['String']>;
    Latitude_lt?: InputMaybe<Scalars['String']>;
    ElevationDatum_lt?: InputMaybe<Scalars['String']>;
    ElevationDatum_gte?: InputMaybe<Scalars['String']>;
    SiteName_exists?: InputMaybe<Scalars['Boolean']>;
    ElevationDatum_exists?: InputMaybe<Scalars['Boolean']>;
    Longitude_exists?: InputMaybe<Scalars['Boolean']>;
    timeSeriesResultUUID_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    ElevationDatum_gt?: InputMaybe<Scalars['String']>;
    SiteName_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    SiteCode_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    SiteType_gt?: InputMaybe<Scalars['String']>;
    Elevation_m_exists?: InputMaybe<Scalars['Boolean']>;
    SiteCode_exists?: InputMaybe<Scalars['Boolean']>;
    Elevation_m_lte?: InputMaybe<Scalars['String']>;
    timeSeriesResultUUID_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    Elevation_m_gte?: InputMaybe<Scalars['String']>;
    Longitude_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    timeSeriesResultUUID_lte?: InputMaybe<Scalars['String']>;
    Latitude_lte?: InputMaybe<Scalars['String']>;
    timeSeriesResultUUID?: InputMaybe<Scalars['String']>;
    ElevationDatum_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    Elevation_m_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    AND?: InputMaybe<Array<Geojson_Checksum_Normalized_SiteQueryInput>>;
    Latitude_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    Longitude_gt?: InputMaybe<Scalars['String']>;
    SiteCode?: InputMaybe<Scalars['String']>;
    ElevationDatum_ne?: InputMaybe<Scalars['String']>;
    OR?: InputMaybe<Array<Geojson_Checksum_Normalized_SiteQueryInput>>;
    SiteName_gt?: InputMaybe<Scalars['String']>;
    ElevationDatum?: InputMaybe<Scalars['String']>;
    SiteCode_lte?: InputMaybe<Scalars['String']>;
    Latitude?: InputMaybe<Scalars['String']>;
    SiteCode_gte?: InputMaybe<Scalars['String']>;
    SiteType_lt?: InputMaybe<Scalars['String']>;
    timeSeriesResultUUID_ne?: InputMaybe<Scalars['String']>;
    SiteName_lt?: InputMaybe<Scalars['String']>;
    SiteType_lte?: InputMaybe<Scalars['String']>;
    Longitude_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    Elevation_m_ne?: InputMaybe<Scalars['String']>;
    SiteType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Geojson_Checksum_Normalized_Simulation_TypeQueryInput = {
    simulation_type_name_ne?: InputMaybe<Scalars['String']>;
    AND?: InputMaybe<Array<Geojson_Checksum_Normalized_Simulation_TypeQueryInput>>;
    simulation_type_name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    simulation_type_name_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    simulation_type_name_gt?: InputMaybe<Scalars['String']>;
    OR?: InputMaybe<Array<Geojson_Checksum_Normalized_Simulation_TypeQueryInput>>;
    simulation_type_name?: InputMaybe<Scalars['String']>;
    simulation_type_name_exists?: InputMaybe<Scalars['Boolean']>;
    simulation_type_name_gte?: InputMaybe<Scalars['String']>;
    simulation_type_name_lt?: InputMaybe<Scalars['String']>;
    simulation_type_name_lte?: InputMaybe<Scalars['String']>;
};

export type Geojson_Checksum_Normalized_Grid_DimensionQueryInput = {
    numberOfRows_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    numberOfLayers_exists?: InputMaybe<Scalars['Boolean']>;
    numberOfRows_gte?: InputMaybe<Scalars['String']>;
    numberOfLayers_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    numberOfColumns_gte?: InputMaybe<Scalars['String']>;
    numberOfRows_exists?: InputMaybe<Scalars['Boolean']>;
    numberOfColumns_exists?: InputMaybe<Scalars['Boolean']>;
    OR?: InputMaybe<Array<Geojson_Checksum_Normalized_Grid_DimensionQueryInput>>;
    numberOfRows_lt?: InputMaybe<Scalars['String']>;
    numberOfLayers_gte?: InputMaybe<Scalars['String']>;
    numberOfColumns_ne?: InputMaybe<Scalars['String']>;
    numberOfColumns_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    numberOfRows_lte?: InputMaybe<Scalars['String']>;
    numberOfLayers_lte?: InputMaybe<Scalars['String']>;
    numberOfColumns?: InputMaybe<Scalars['String']>;
    numberOfColumns_lte?: InputMaybe<Scalars['String']>;
    numberOfColumns_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    numberOfColumns_gt?: InputMaybe<Scalars['String']>;
    numberOfRows?: InputMaybe<Scalars['String']>;
    numberOfRows_ne?: InputMaybe<Scalars['String']>;
    numberOfLayers_lt?: InputMaybe<Scalars['String']>;
    numberOfLayers_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    numberOfRows_gt?: InputMaybe<Scalars['String']>;
    numberOfLayers?: InputMaybe<Scalars['String']>;
    numberOfColumns_lt?: InputMaybe<Scalars['String']>;
    numberOfRows_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    numberOfLayers_gt?: InputMaybe<Scalars['String']>;
    numberOfLayers_ne?: InputMaybe<Scalars['String']>;
    AND?: InputMaybe<Array<Geojson_Checksum_Normalized_Grid_DimensionQueryInput>>;
};

export type Geojson_Checksum_Normalized_Time_Series_ResultUpdateInput = {
    SampleMedium?: InputMaybe<Scalars['String']>;
    Status?: InputMaybe<Scalars['String']>;
    AggregationStatistic?: InputMaybe<Scalars['String']>;
    UnitsAbbreviation?: InputMaybe<Scalars['String']>;
    UnitsName?: InputMaybe<Scalars['String']>;
    timeSeriesResultUUID?: InputMaybe<Scalars['String']>;
    AggregationStatistic_unset?: InputMaybe<Scalars['Boolean']>;
    SampleMedium_unset?: InputMaybe<Scalars['Boolean']>;
    UnitsName_unset?: InputMaybe<Scalars['Boolean']>;
    UnitsType_unset?: InputMaybe<Scalars['Boolean']>;
    UnitsType?: InputMaybe<Scalars['String']>;
    Status_unset?: InputMaybe<Scalars['Boolean']>;
    UnitsAbbreviation_unset?: InputMaybe<Scalars['Boolean']>;
    ValueCount?: InputMaybe<Scalars['String']>;
    timeSeriesResultUUID_unset?: InputMaybe<Scalars['Boolean']>;
    ValueCount_unset?: InputMaybe<Scalars['Boolean']>;
};

export type Geojson_Checksum_Normalized_Grid_Dimension = {
    __typename?: 'Geojson_checksum_normalized_grid_dimension';
    numberOfColumns?: Maybe<Scalars['String']>;
    numberOfLayers?: Maybe<Scalars['String']>;
    numberOfRows?: Maybe<Scalars['String']>;
};

export type Geojson_Checksum_Normalized_Model_OutputQueryInput = {
    includes_output_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    includes_output_exists?: InputMaybe<Scalars['Boolean']>;
    AND?: InputMaybe<Array<Geojson_Checksum_Normalized_Model_OutputQueryInput>>;
    includes_output?: InputMaybe<Scalars['String']>;
    includes_output_ne?: InputMaybe<Scalars['String']>;
    OR?: InputMaybe<Array<Geojson_Checksum_Normalized_Model_OutputQueryInput>>;
    includes_output_lt?: InputMaybe<Scalars['String']>;
    includes_output_lte?: InputMaybe<Scalars['String']>;
    includes_output_gt?: InputMaybe<Scalars['String']>;
    includes_output_gte?: InputMaybe<Scalars['String']>;
    includes_output_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Geojson_Checksum_NormalizedRightInsertInput = {
    URL?: InputMaybe<Scalars['String']>;
    rightsStatement?: InputMaybe<Scalars['String']>;
};

export type Geojson_Checksum_Normalized_Source_Code_UrlUpdateInput = {
    value_unset?: InputMaybe<Scalars['Boolean']>;
    value?: InputMaybe<Scalars['String']>;
};

export type Geojson_Checksum_Normalized_Supported_File_ExtensionUpdateInput = {
    value?: InputMaybe<Scalars['String']>;
    value_unset?: InputMaybe<Scalars['Boolean']>;
};

export type Geojson_Checksum_NormalizedRight = {
    __typename?: 'Geojson_checksum_normalizedRight';
    URL?: Maybe<Scalars['String']>;
    rightsStatement?: Maybe<Scalars['String']>;
};

export type Geojson_Checksum_NormalizedRelationQueryInput = {
    type_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    type_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    value_ne?: InputMaybe<Scalars['String']>;
    type_gte?: InputMaybe<Scalars['String']>;
    value_exists?: InputMaybe<Scalars['Boolean']>;
    type_lte?: InputMaybe<Scalars['String']>;
    value_lt?: InputMaybe<Scalars['String']>;
    AND?: InputMaybe<Array<Geojson_Checksum_NormalizedRelationQueryInput>>;
    value?: InputMaybe<Scalars['String']>;
    type_gt?: InputMaybe<Scalars['String']>;
    value_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    value_lte?: InputMaybe<Scalars['String']>;
    OR?: InputMaybe<Array<Geojson_Checksum_NormalizedRelationQueryInput>>;
    type_lt?: InputMaybe<Scalars['String']>;
    value_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    type_ne?: InputMaybe<Scalars['String']>;
    type_exists?: InputMaybe<Scalars['Boolean']>;
    value_gt?: InputMaybe<Scalars['String']>;
    value_gte?: InputMaybe<Scalars['String']>;
    type?: InputMaybe<Scalars['String']>;
};

export type Geojson_Checksum_Normalized_Url_Base_FileUpdateInput = {
    value?: InputMaybe<Scalars['String']>;
    value_unset?: InputMaybe<Scalars['Boolean']>;
};

export type UpdateManyPayload = {
    __typename?: 'UpdateManyPayload';
    matchedCount: Scalars['Int'];
    modifiedCount: Scalars['Int'];
};

export type Geojson_Checksum_NormalizedGeometryinformationQueryInput = {
    geometryType_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    geometryType_lt?: InputMaybe<Scalars['String']>;
    geometryType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    OR?: InputMaybe<Array<Geojson_Checksum_NormalizedGeometryinformationQueryInput>>;
    AND?: InputMaybe<Array<Geojson_Checksum_NormalizedGeometryinformationQueryInput>>;
    featureCount_gt?: InputMaybe<Scalars['String']>;
    featureCount_lt?: InputMaybe<Scalars['String']>;
    featureCount_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    featureCount_lte?: InputMaybe<Scalars['String']>;
    geometryType_lte?: InputMaybe<Scalars['String']>;
    featureCount_ne?: InputMaybe<Scalars['String']>;
    featureCount?: InputMaybe<Scalars['String']>;
    geometryType_ne?: InputMaybe<Scalars['String']>;
    geometryType_exists?: InputMaybe<Scalars['Boolean']>;
    geometryType_gte?: InputMaybe<Scalars['String']>;
    featureCount_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    featureCount_exists?: InputMaybe<Scalars['Boolean']>;
    geometryType_gt?: InputMaybe<Scalars['String']>;
    featureCount_gte?: InputMaybe<Scalars['String']>;
    geometryType?: InputMaybe<Scalars['String']>;
};

export type Geojson_Checksum_Normalized_Source_Code_UrlQueryInput = {
    value_lt?: InputMaybe<Scalars['String']>;
    value_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    value_ne?: InputMaybe<Scalars['String']>;
    value_gt?: InputMaybe<Scalars['String']>;
    value_gte?: InputMaybe<Scalars['String']>;
    AND?: InputMaybe<Array<Geojson_Checksum_Normalized_Source_Code_UrlQueryInput>>;
    OR?: InputMaybe<Array<Geojson_Checksum_Normalized_Source_Code_UrlQueryInput>>;
    value?: InputMaybe<Scalars['String']>;
    value_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    value_exists?: InputMaybe<Scalars['Boolean']>;
    value_lte?: InputMaybe<Scalars['String']>;
};

export type Geojson_Checksum_Normalized_Url_BaseUpdateInput = {
    value_unset?: InputMaybe<Scalars['Boolean']>;
    value?: InputMaybe<Scalars['String']>;
};

export type Geojson_Checksum_Normalized_Simulation_Type = {
    __typename?: 'Geojson_checksum_normalized_simulation_type';
    simulation_type_name?: Maybe<Scalars['String']>;
};

export type Title_Abstract_Search = {
    term: Scalars['String'];
    limit?: InputMaybe<Scalars['Float']>;
};

export type Geojson_Checksum_Normalized_Cell_InformationQueryInput = {
    cellSizeYValue_lte?: InputMaybe<Scalars['String']>;
    cellDataType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    rows_exists?: InputMaybe<Scalars['Boolean']>;
    name_lte?: InputMaybe<Scalars['String']>;
    cellSizeXValue_gt?: InputMaybe<Scalars['String']>;
    columns_gt?: InputMaybe<Scalars['String']>;
    cellDataType_ne?: InputMaybe<Scalars['String']>;
    cellDataType_gte?: InputMaybe<Scalars['String']>;
    name_gte?: InputMaybe<Scalars['String']>;
    name_lt?: InputMaybe<Scalars['String']>;
    name_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    cellSizeXValue_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    rows_ne?: InputMaybe<Scalars['String']>;
    cellSizeYValue_exists?: InputMaybe<Scalars['Boolean']>;
    name_gt?: InputMaybe<Scalars['String']>;
    cellSizeXValue_gte?: InputMaybe<Scalars['String']>;
    cellDataType_gt?: InputMaybe<Scalars['String']>;
    rows_lte?: InputMaybe<Scalars['String']>;
    cellSizeXValue_ne?: InputMaybe<Scalars['String']>;
    rows_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    cellSizeXValue_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    cellSizeYValue_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    cellSizeYValue?: InputMaybe<Scalars['String']>;
    columns_gte?: InputMaybe<Scalars['String']>;
    name_ne?: InputMaybe<Scalars['String']>;
    cellDataType_exists?: InputMaybe<Scalars['Boolean']>;
    rows_gt?: InputMaybe<Scalars['String']>;
    AND?: InputMaybe<Array<Geojson_Checksum_Normalized_Cell_InformationQueryInput>>;
    name_exists?: InputMaybe<Scalars['Boolean']>;
    cellSizeYValue_lt?: InputMaybe<Scalars['String']>;
    OR?: InputMaybe<Array<Geojson_Checksum_Normalized_Cell_InformationQueryInput>>;
    cellSizeYValue_gt?: InputMaybe<Scalars['String']>;
    rows_gte?: InputMaybe<Scalars['String']>;
    cellDataType_lte?: InputMaybe<Scalars['String']>;
    name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    name?: InputMaybe<Scalars['String']>;
    columns?: InputMaybe<Scalars['String']>;
    columns_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    rows?: InputMaybe<Scalars['String']>;
    columns_ne?: InputMaybe<Scalars['String']>;
    cellSizeXValue?: InputMaybe<Scalars['String']>;
    cellSizeYValue_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    cellSizeXValue_lt?: InputMaybe<Scalars['String']>;
    cellSizeXValue_lte?: InputMaybe<Scalars['String']>;
    columns_lte?: InputMaybe<Scalars['String']>;
    cellSizeYValue_ne?: InputMaybe<Scalars['String']>;
    cellDataType_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    columns_lt?: InputMaybe<Scalars['String']>;
    cellSizeYValue_gte?: InputMaybe<Scalars['String']>;
    rows_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    rows_lt?: InputMaybe<Scalars['String']>;
    columns_exists?: InputMaybe<Scalars['Boolean']>;
    columns_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    cellDataType?: InputMaybe<Scalars['String']>;
    cellSizeXValue_exists?: InputMaybe<Scalars['Boolean']>;
    cellDataType_lt?: InputMaybe<Scalars['String']>;
};

export type Geojson_Checksum_Normalized_Tool_IconUpdateInput = {
    data_url?: InputMaybe<Scalars['String']>;
    data_url_unset?: InputMaybe<Scalars['Boolean']>;
    value?: InputMaybe<Scalars['String']>;
    value_unset?: InputMaybe<Scalars['Boolean']>;
};

export type Geojson_Checksum_Normalized_Source_Code_Url = {
    __typename?: 'Geojson_checksum_normalized_source_code_url';
    value?: Maybe<Scalars['String']>;
};

export type Geojson_Checksum_NormalizedSpatial_Coverage = {
    __typename?: 'Geojson_checksum_normalizedSpatial_coverage';
    geometry?: Maybe<Geojson_Checksum_NormalizedSpatial_CoverageGeometry>;
    type?: Maybe<Scalars['String']>;
};

export type Geojson_Checksum_Normalized_MpmetadatumUpdateInput = {
    modelEngine_unset?: InputMaybe<Scalars['Boolean']>;
    modelSoftware_unset?: InputMaybe<Scalars['Boolean']>;
    modelVersion_unset?: InputMaybe<Scalars['Boolean']>;
    modelCodeRepository_unset?: InputMaybe<Scalars['Boolean']>;
    modelProgramLanguage?: InputMaybe<Scalars['String']>;
    modelSoftware?: InputMaybe<Scalars['String']>;
    modelWebsite?: InputMaybe<Scalars['String']>;
    modelCodeRepository?: InputMaybe<Scalars['String']>;
    modelOperatingSystem?: InputMaybe<Scalars['String']>;
    modelReleaseNotes_unset?: InputMaybe<Scalars['Boolean']>;
    modelReleaseDate?: InputMaybe<Scalars['String']>;
    modelWebsite_unset?: InputMaybe<Scalars['Boolean']>;
    modelOperatingSystem_unset?: InputMaybe<Scalars['Boolean']>;
    modelDocumentation?: InputMaybe<Scalars['String']>;
    modelReleaseNotes?: InputMaybe<Scalars['String']>;
    modelReleaseDate_unset?: InputMaybe<Scalars['Boolean']>;
    modelDocumentation_unset?: InputMaybe<Scalars['Boolean']>;
    modelEngine?: InputMaybe<Scalars['String']>;
    modelProgramLanguage_unset?: InputMaybe<Scalars['Boolean']>;
    modelVersion?: InputMaybe<Scalars['String']>;
};

export type Geojson_Checksum_Normalized_VersionUpdateInput = {
    value?: InputMaybe<Scalars['String']>;
    value_unset?: InputMaybe<Scalars['Boolean']>;
};

export type Geojson_Checksum_NormalizedVariableUpdateInput = {
    type?: InputMaybe<Scalars['String']>;
    type_unset?: InputMaybe<Scalars['Boolean']>;
    unit_unset?: InputMaybe<Scalars['Boolean']>;
    method?: InputMaybe<Scalars['String']>;
    name_unset?: InputMaybe<Scalars['Boolean']>;
    unit?: InputMaybe<Scalars['String']>;
    missing_value_unset?: InputMaybe<Scalars['Boolean']>;
    shape_unset?: InputMaybe<Scalars['Boolean']>;
    missing_value?: InputMaybe<Scalars['String']>;
    name?: InputMaybe<Scalars['String']>;
    shape?: InputMaybe<Scalars['String']>;
    method_unset?: InputMaybe<Scalars['Boolean']>;
    descriptive_name?: InputMaybe<Scalars['String']>;
    descriptive_name_unset?: InputMaybe<Scalars['Boolean']>;
};

export type InsertManyPayload = {
    __typename?: 'InsertManyPayload';
    insertedIds: Array<Maybe<Scalars['ObjectId']>>;
};

export type Geojson_Checksum_NormalizedRightUpdateInput = {
    rightsStatement?: InputMaybe<Scalars['String']>;
    rightsStatement_unset?: InputMaybe<Scalars['Boolean']>;
    URL?: InputMaybe<Scalars['String']>;
    URL_unset?: InputMaybe<Scalars['Boolean']>;
};

export type Geojson_Checksum_NormalizedFile = {
    __typename?: 'Geojson_checksum_normalizedFile';
    checksum?: Maybe<Scalars['String']>;
    mime_type?: Maybe<Scalars['String']>;
    path?: Maybe<Scalars['String']>;
    size?: Maybe<Scalars['Int']>;
};

export type Geojson_Checksum_NormalizedOriginalcoverageQueryInput = {
    unit_lte?: InputMaybe<Scalars['String']>;
    projection_string_exists?: InputMaybe<Scalars['Boolean']>;
    westlimit_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    projection_string?: InputMaybe<Scalars['String']>;
    datum_exists?: InputMaybe<Scalars['Boolean']>;
    northlimit_exists?: InputMaybe<Scalars['Boolean']>;
    unit_lt?: InputMaybe<Scalars['String']>;
    AND?: InputMaybe<Array<Geojson_Checksum_NormalizedOriginalcoverageQueryInput>>;
    northlimit_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    datum_lte?: InputMaybe<Scalars['String']>;
    unit_exists?: InputMaybe<Scalars['Boolean']>;
    datum_lt?: InputMaybe<Scalars['String']>;
    northlimit_gt?: InputMaybe<Scalars['String']>;
    datum_gt?: InputMaybe<Scalars['String']>;
    westlimit?: InputMaybe<Scalars['String']>;
    westlimit_gte?: InputMaybe<Scalars['String']>;
    unit_gte?: InputMaybe<Scalars['String']>;
    projection_name_lt?: InputMaybe<Scalars['String']>;
    projection_string_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    projection_string_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    eastlimit_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    datum_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    projection_string_lte?: InputMaybe<Scalars['String']>;
    westlimit_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    northlimit_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    southlimit_ne?: InputMaybe<Scalars['String']>;
    eastlimit_gte?: InputMaybe<Scalars['String']>;
    eastlimit_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    eastlimit?: InputMaybe<Scalars['String']>;
    westlimit_lt?: InputMaybe<Scalars['String']>;
    projection_string_ne?: InputMaybe<Scalars['String']>;
    datum?: InputMaybe<Scalars['String']>;
    eastlimit_gt?: InputMaybe<Scalars['String']>;
    southlimit_lt?: InputMaybe<Scalars['String']>;
    eastlimit_lte?: InputMaybe<Scalars['String']>;
    southlimit_lte?: InputMaybe<Scalars['String']>;
    northlimit_lt?: InputMaybe<Scalars['String']>;
    westlimit_exists?: InputMaybe<Scalars['Boolean']>;
    projection_name_lte?: InputMaybe<Scalars['String']>;
    datum_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    northlimit?: InputMaybe<Scalars['String']>;
    unit?: InputMaybe<Scalars['String']>;
    projection_string_lt?: InputMaybe<Scalars['String']>;
    datum_gte?: InputMaybe<Scalars['String']>;
    projection_name_ne?: InputMaybe<Scalars['String']>;
    southlimit_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    westlimit_ne?: InputMaybe<Scalars['String']>;
    eastlimit_lt?: InputMaybe<Scalars['String']>;
    projection_string_gt?: InputMaybe<Scalars['String']>;
    southlimit_gt?: InputMaybe<Scalars['String']>;
    northlimit_gte?: InputMaybe<Scalars['String']>;
    projection_name_gt?: InputMaybe<Scalars['String']>;
    unit_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    southlimit?: InputMaybe<Scalars['String']>;
    projection_string_gte?: InputMaybe<Scalars['String']>;
    projection_name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    eastlimit_exists?: InputMaybe<Scalars['Boolean']>;
    northlimit_ne?: InputMaybe<Scalars['String']>;
    projection_name_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    unit_ne?: InputMaybe<Scalars['String']>;
    datum_ne?: InputMaybe<Scalars['String']>;
    northlimit_lte?: InputMaybe<Scalars['String']>;
    westlimit_lte?: InputMaybe<Scalars['String']>;
    westlimit_gt?: InputMaybe<Scalars['String']>;
    southlimit_exists?: InputMaybe<Scalars['Boolean']>;
    unit_gt?: InputMaybe<Scalars['String']>;
    unit_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    eastlimit_ne?: InputMaybe<Scalars['String']>;
    projection_name?: InputMaybe<Scalars['String']>;
    projection_name_gte?: InputMaybe<Scalars['String']>;
    OR?: InputMaybe<Array<Geojson_Checksum_NormalizedOriginalcoverageQueryInput>>;
    southlimit_gte?: InputMaybe<Scalars['String']>;
    projection_name_exists?: InputMaybe<Scalars['Boolean']>;
    southlimit_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Geojson_Checksum_NormalizedOri_CoverageQueryInput = {
    projection_string_type_ne?: InputMaybe<Scalars['String']>;
    projection_string_type_exists?: InputMaybe<Scalars['Boolean']>;
    datum_gte?: InputMaybe<Scalars['String']>;
    datum?: InputMaybe<Scalars['String']>;
    _value_ne?: InputMaybe<Scalars['String']>;
    projection_string_text?: InputMaybe<Scalars['String']>;
    projection_string_text_gt?: InputMaybe<Scalars['String']>;
    _value_exists?: InputMaybe<Scalars['Boolean']>;
    projection_string_text_gte?: InputMaybe<Scalars['String']>;
    _value_lt?: InputMaybe<Scalars['String']>;
    _value_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    projection_string_type?: InputMaybe<Scalars['String']>;
    projection_string_type_gt?: InputMaybe<Scalars['String']>;
    projection_string_type_gte?: InputMaybe<Scalars['String']>;
    projection_string_text_lt?: InputMaybe<Scalars['String']>;
    _value_lte?: InputMaybe<Scalars['String']>;
    datum_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    datum_exists?: InputMaybe<Scalars['Boolean']>;
    projection_string_type_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    OR?: InputMaybe<Array<Geojson_Checksum_NormalizedOri_CoverageQueryInput>>;
    projection_string_text_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    datum_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    projection_string_type_lt?: InputMaybe<Scalars['String']>;
    projection_string_text_exists?: InputMaybe<Scalars['Boolean']>;
    projection_string_text_ne?: InputMaybe<Scalars['String']>;
    projection_string_type_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    _value_gt?: InputMaybe<Scalars['String']>;
    _value_gte?: InputMaybe<Scalars['String']>;
    datum_ne?: InputMaybe<Scalars['String']>;
    _value_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    _value?: InputMaybe<Scalars['String']>;
    projection_string_text_lte?: InputMaybe<Scalars['String']>;
    projection_string_text_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    datum_lt?: InputMaybe<Scalars['String']>;
    datum_gt?: InputMaybe<Scalars['String']>;
    AND?: InputMaybe<Array<Geojson_Checksum_NormalizedOri_CoverageQueryInput>>;
    datum_lte?: InputMaybe<Scalars['String']>;
    projection_string_type_lte?: InputMaybe<Scalars['String']>;
};

export type Geojson_Checksum_NormalizedPeriod_CoverageInsertInput = {
    end?: InputMaybe<Scalars['String']>;
    start?: InputMaybe<Scalars['String']>;
};

export type Geojson_Checksum_Normalized_MethodInsertInput = {
    MethodCode?: InputMaybe<Scalars['String']>;
    MethodDescription?: InputMaybe<Scalars['String']>;
    MethodName?: InputMaybe<Scalars['String']>;
    MethodType?: InputMaybe<Scalars['String']>;
    timeSeriesResultUUID?: InputMaybe<Scalars['String']>;
};

export type Geojson_Checksum_Normalized_Tool_Icon = {
    __typename?: 'Geojson_checksum_normalized_tool_icon';
    data_url?: Maybe<Scalars['String']>;
    value?: Maybe<Scalars['String']>;
};

export type Geojson_Checksum_NormalizedRightQueryInput = {
    URL_gte?: InputMaybe<Scalars['String']>;
    rightsStatement_exists?: InputMaybe<Scalars['Boolean']>;
    URL_lte?: InputMaybe<Scalars['String']>;
    rightsStatement_ne?: InputMaybe<Scalars['String']>;
    rightsStatement_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    URL?: InputMaybe<Scalars['String']>;
    rightsStatement_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    AND?: InputMaybe<Array<Geojson_Checksum_NormalizedRightQueryInput>>;
    URL_ne?: InputMaybe<Scalars['String']>;
    URL_gt?: InputMaybe<Scalars['String']>;
    URL_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    URL_exists?: InputMaybe<Scalars['Boolean']>;
    rightsStatement_lte?: InputMaybe<Scalars['String']>;
    URL_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    rightsStatement_gte?: InputMaybe<Scalars['String']>;
    OR?: InputMaybe<Array<Geojson_Checksum_NormalizedRightQueryInput>>;
    rightsStatement_gt?: InputMaybe<Scalars['String']>;
    URL_lt?: InputMaybe<Scalars['String']>;
    rightsStatement_lt?: InputMaybe<Scalars['String']>;
    rightsStatement?: InputMaybe<Scalars['String']>;
};

export type Geojson_Checksum_Normalized_Url_Base_FileQueryInput = {
    value_gte?: InputMaybe<Scalars['String']>;
    value_lt?: InputMaybe<Scalars['String']>;
    value?: InputMaybe<Scalars['String']>;
    value_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    value_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    AND?: InputMaybe<Array<Geojson_Checksum_Normalized_Url_Base_FileQueryInput>>;
    value_ne?: InputMaybe<Scalars['String']>;
    OR?: InputMaybe<Array<Geojson_Checksum_Normalized_Url_Base_FileQueryInput>>;
    value_lte?: InputMaybe<Scalars['String']>;
    value_exists?: InputMaybe<Scalars['Boolean']>;
    value_gt?: InputMaybe<Scalars['String']>;
};

export type DeleteManyPayload = {
    __typename?: 'DeleteManyPayload';
    deletedCount: Scalars['Int'];
};

export type Geojson_Checksum_NormalizedIdentifierInsertInput = {
    url?: InputMaybe<Scalars['String']>;
    name?: InputMaybe<Scalars['String']>;
};

export type Geojson_Checksum_Normalized_Grid_DimensionUpdateInput = {
    numberOfLayers?: InputMaybe<Scalars['String']>;
    numberOfLayers_unset?: InputMaybe<Scalars['Boolean']>;
    numberOfRows?: InputMaybe<Scalars['String']>;
    numberOfRows_unset?: InputMaybe<Scalars['Boolean']>;
    numberOfColumns?: InputMaybe<Scalars['String']>;
    numberOfColumns_unset?: InputMaybe<Scalars['Boolean']>;
};

export type Geojson_Checksum_Normalized_Version = {
    __typename?: 'Geojson_checksum_normalized_version';
    value?: Maybe<Scalars['String']>;
};

export type Geojson_Checksum_NormalizedFunding_AgencyQueryInput = {
    fundingAgencyURL_lte?: InputMaybe<Scalars['String']>;
    fundingAgencyURL_gte?: InputMaybe<Scalars['String']>;
    awardNumber?: InputMaybe<Scalars['String']>;
    awardTitle_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    awardTitle_exists?: InputMaybe<Scalars['Boolean']>;
    fundingAgencyURL_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    fundingAgencyURL_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    fundingAgencyName_exists?: InputMaybe<Scalars['Boolean']>;
    fundingAgencyURL_gt?: InputMaybe<Scalars['String']>;
    awardTitle_lt?: InputMaybe<Scalars['String']>;
    fundingAgencyName?: InputMaybe<Scalars['String']>;
    fundingAgencyName_gt?: InputMaybe<Scalars['String']>;
    awardTitle_ne?: InputMaybe<Scalars['String']>;
    awardTitle_lte?: InputMaybe<Scalars['String']>;
    fundingAgencyName_lt?: InputMaybe<Scalars['String']>;
    fundingAgencyURL_exists?: InputMaybe<Scalars['Boolean']>;
    awardNumber_gte?: InputMaybe<Scalars['String']>;
    OR?: InputMaybe<Array<Geojson_Checksum_NormalizedFunding_AgencyQueryInput>>;
    fundingAgencyName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    awardNumber_gt?: InputMaybe<Scalars['String']>;
    awardNumber_lte?: InputMaybe<Scalars['String']>;
    fundingAgencyName_ne?: InputMaybe<Scalars['String']>;
    awardNumber_exists?: InputMaybe<Scalars['Boolean']>;
    fundingAgencyName_lte?: InputMaybe<Scalars['String']>;
    AND?: InputMaybe<Array<Geojson_Checksum_NormalizedFunding_AgencyQueryInput>>;
    fundingAgencyURL?: InputMaybe<Scalars['String']>;
    fundingAgencyURL_ne?: InputMaybe<Scalars['String']>;
    awardTitle_gt?: InputMaybe<Scalars['String']>;
    fundingAgencyName_gte?: InputMaybe<Scalars['String']>;
    awardNumber_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    awardNumber_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    awardTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    awardTitle_gte?: InputMaybe<Scalars['String']>;
    fundingAgencyURL_lt?: InputMaybe<Scalars['String']>;
    awardTitle?: InputMaybe<Scalars['String']>;
    fundingAgencyName_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    awardNumber_lt?: InputMaybe<Scalars['String']>;
    awardNumber_ne?: InputMaybe<Scalars['String']>;
};

export type Geojson_Checksum_NormalizedPublisherQueryInput = {
    publisherName_lt?: InputMaybe<Scalars['String']>;
    AND?: InputMaybe<Array<Geojson_Checksum_NormalizedPublisherQueryInput>>;
    publisherURL_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    publisherURL_exists?: InputMaybe<Scalars['Boolean']>;
    publisherURL_lt?: InputMaybe<Scalars['String']>;
    publisherURL_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    publisherURL_gte?: InputMaybe<Scalars['String']>;
    publisherName_lte?: InputMaybe<Scalars['String']>;
    publisherURL_gt?: InputMaybe<Scalars['String']>;
    publisherName_ne?: InputMaybe<Scalars['String']>;
    publisherName_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    publisherName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    publisherName_gte?: InputMaybe<Scalars['String']>;
    publisherName_exists?: InputMaybe<Scalars['Boolean']>;
    publisherName_gt?: InputMaybe<Scalars['String']>;
    publisherURL?: InputMaybe<Scalars['String']>;
    publisherURL_ne?: InputMaybe<Scalars['String']>;
    publisherURL_lte?: InputMaybe<Scalars['String']>;
    OR?: InputMaybe<Array<Geojson_Checksum_NormalizedPublisherQueryInput>>;
    publisherName?: InputMaybe<Scalars['String']>;
};

export type Geojson_Checksum_NormalizedCreatorInsertInput = {
    identifiers?: InputMaybe<Scalars['String']>;
    name?: InputMaybe<Scalars['String']>;
    organization?: InputMaybe<Scalars['String']>;
    creatorOrder?: InputMaybe<Scalars['String']>;
    email?: InputMaybe<Scalars['String']>;
    hydroshare_user_id?: InputMaybe<Scalars['String']>;
    phone?: InputMaybe<Scalars['String']>;
    homepage?: InputMaybe<Scalars['String']>;
    address?: InputMaybe<Scalars['String']>;
};

export type Geojson_Checksum_NormalizedPeriod_CoverageUpdateInput = {
    end?: InputMaybe<Scalars['String']>;
    end_unset?: InputMaybe<Scalars['Boolean']>;
    start?: InputMaybe<Scalars['String']>;
    start_unset?: InputMaybe<Scalars['Boolean']>;
};

export type Geojson_Checksum_Normalized_Processing_LevelUpdateInput = {
    timeSeriesResultUUID?: InputMaybe<Scalars['String']>;
    timeSeriesResultUUID_unset?: InputMaybe<Scalars['Boolean']>;
    Definition?: InputMaybe<Scalars['String']>;
    Definition_unset?: InputMaybe<Scalars['Boolean']>;
    Explanation?: InputMaybe<Scalars['String']>;
    Explanation_unset?: InputMaybe<Scalars['Boolean']>;
    ProcessingLevelCode?: InputMaybe<Scalars['String']>;
    ProcessingLevelCode_unset?: InputMaybe<Scalars['Boolean']>;
};

export type Geojson_Checksum_NormalizedVariable = {
    __typename?: 'Geojson_checksum_normalizedVariable';
    descriptive_name?: Maybe<Scalars['String']>;
    method?: Maybe<Scalars['String']>;
    missing_value?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    shape?: Maybe<Scalars['String']>;
    type?: Maybe<Scalars['String']>;
    unit?: Maybe<Scalars['String']>;
};

export type Geojson_Checksum_NormalizedFieldinformationQueryInput = {
    fieldWidth_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    fieldTypeCode_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    fieldName_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    fieldType_exists?: InputMaybe<Scalars['Boolean']>;
    fieldWidth_gte?: InputMaybe<Scalars['String']>;
    fieldName_gt?: InputMaybe<Scalars['String']>;
    fieldName_ne?: InputMaybe<Scalars['String']>;
    fieldTypeCode_exists?: InputMaybe<Scalars['Boolean']>;
    fieldType_gte?: InputMaybe<Scalars['String']>;
    fieldType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    fieldType_ne?: InputMaybe<Scalars['String']>;
    fieldPrecision_lt?: InputMaybe<Scalars['String']>;
    fieldTypeCode?: InputMaybe<Scalars['String']>;
    fieldType_lte?: InputMaybe<Scalars['String']>;
    fieldName_lt?: InputMaybe<Scalars['String']>;
    fieldTypeCode_ne?: InputMaybe<Scalars['String']>;
    fieldWidth_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    fieldPrecision_gte?: InputMaybe<Scalars['String']>;
    fieldType_lt?: InputMaybe<Scalars['String']>;
    fieldWidth_exists?: InputMaybe<Scalars['Boolean']>;
    OR?: InputMaybe<Array<Geojson_Checksum_NormalizedFieldinformationQueryInput>>;
    fieldType_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    fieldName_exists?: InputMaybe<Scalars['Boolean']>;
    fieldPrecision_ne?: InputMaybe<Scalars['String']>;
    fieldPrecision_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    fieldWidth_lte?: InputMaybe<Scalars['String']>;
    fieldName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    fieldPrecision_lte?: InputMaybe<Scalars['String']>;
    fieldName?: InputMaybe<Scalars['String']>;
    AND?: InputMaybe<Array<Geojson_Checksum_NormalizedFieldinformationQueryInput>>;
    fieldTypeCode_gt?: InputMaybe<Scalars['String']>;
    fieldPrecision?: InputMaybe<Scalars['String']>;
    fieldWidth?: InputMaybe<Scalars['String']>;
    fieldTypeCode_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    fieldWidth_lt?: InputMaybe<Scalars['String']>;
    fieldPrecision_exists?: InputMaybe<Scalars['Boolean']>;
    fieldTypeCode_lte?: InputMaybe<Scalars['String']>;
    fieldName_lte?: InputMaybe<Scalars['String']>;
    fieldWidth_gt?: InputMaybe<Scalars['String']>;
    fieldTypeCode_lt?: InputMaybe<Scalars['String']>;
    fieldType?: InputMaybe<Scalars['String']>;
    fieldType_gt?: InputMaybe<Scalars['String']>;
    fieldPrecision_gt?: InputMaybe<Scalars['String']>;
    fieldPrecision_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    fieldTypeCode_gte?: InputMaybe<Scalars['String']>;
    fieldWidth_ne?: InputMaybe<Scalars['String']>;
    fieldName_gte?: InputMaybe<Scalars['String']>;
};

export type Geojson_Checksum_NormalizedGeometryinformationInsertInput = {
    featureCount?: InputMaybe<Scalars['String']>;
    geometryType?: InputMaybe<Scalars['String']>;
};

export type Geojson_Checksum_NormalizedContributorUpdateInput = {
    identifiers_unset?: InputMaybe<Scalars['Boolean']>;
    email_unset?: InputMaybe<Scalars['Boolean']>;
    homepage_unset?: InputMaybe<Scalars['Boolean']>;
    hydroshare_user_id_unset?: InputMaybe<Scalars['Boolean']>;
    name?: InputMaybe<Scalars['String']>;
    address?: InputMaybe<Scalars['String']>;
    address_unset?: InputMaybe<Scalars['Boolean']>;
    email?: InputMaybe<Scalars['String']>;
    organization_unset?: InputMaybe<Scalars['Boolean']>;
    homepage?: InputMaybe<Scalars['String']>;
    hydroshare_user_id?: InputMaybe<Scalars['String']>;
    organization?: InputMaybe<Scalars['String']>;
    phone?: InputMaybe<Scalars['String']>;
    phone_unset?: InputMaybe<Scalars['Boolean']>;
    name_unset?: InputMaybe<Scalars['Boolean']>;
    identifiers?: InputMaybe<Scalars['String']>;
};

export type Geojson_Checksum_NormalizedIdentifierUpdateInput = {
    name_unset?: InputMaybe<Scalars['Boolean']>;
    url?: InputMaybe<Scalars['String']>;
    url_unset?: InputMaybe<Scalars['Boolean']>;
    name?: InputMaybe<Scalars['String']>;
};

export type Geojson_Checksum_Normalized_Variable = {
    __typename?: 'Geojson_checksum_normalized_variable';
    NoDataValue?: Maybe<Scalars['String']>;
    Speciation?: Maybe<Scalars['String']>;
    VariableCode?: Maybe<Scalars['String']>;
    VariableName?: Maybe<Scalars['String']>;
    VariableType?: Maybe<Scalars['String']>;
    timeSeriesResultUUID?: Maybe<Scalars['String']>;
};

export type Geojson_Checksum_Normalized_Model_InputInsertInput = {
    demSourceName?: InputMaybe<Scalars['String']>;
    landUseDataSourceURL?: InputMaybe<Scalars['String']>;
    numberOfHRUs?: InputMaybe<Scalars['String']>;
    rainfallTimeStepType?: InputMaybe<Scalars['String']>;
    demResolution?: InputMaybe<Scalars['String']>;
    demSourceURL?: InputMaybe<Scalars['String']>;
    routingTimeStepValue?: InputMaybe<Scalars['String']>;
    warmupPeriodValue?: InputMaybe<Scalars['String']>;
    numberOfSubbasins?: InputMaybe<Scalars['String']>;
    routingTimeStepType?: InputMaybe<Scalars['String']>;
    soilDataSourceName?: InputMaybe<Scalars['String']>;
    simulationTimeStepValue?: InputMaybe<Scalars['String']>;
    watershedArea?: InputMaybe<Scalars['String']>;
    soilDataSourceURL?: InputMaybe<Scalars['String']>;
    landUseDataSourceName?: InputMaybe<Scalars['String']>;
    rainfallTimeStepValue?: InputMaybe<Scalars['String']>;
    simulationTimeStepType?: InputMaybe<Scalars['String']>;
};

export type Geojson_Checksum_Normalized_MpmetadatumInsertInput = {
    modelWebsite?: InputMaybe<Scalars['String']>;
    modelReleaseDate?: InputMaybe<Scalars['String']>;
    modelReleaseNotes?: InputMaybe<Scalars['String']>;
    modelSoftware?: InputMaybe<Scalars['String']>;
    modelCodeRepository?: InputMaybe<Scalars['String']>;
    modelVersion?: InputMaybe<Scalars['String']>;
    modelDocumentation?: InputMaybe<Scalars['String']>;
    modelEngine?: InputMaybe<Scalars['String']>;
    modelProgramLanguage?: InputMaybe<Scalars['String']>;
    modelOperatingSystem?: InputMaybe<Scalars['String']>;
};

export type Geojson_Checksum_NormalizedFileInsertInput = {
    path?: InputMaybe<Scalars['String']>;
    size?: InputMaybe<Scalars['Int']>;
    checksum?: InputMaybe<Scalars['String']>;
    mime_type?: InputMaybe<Scalars['String']>;
};

export type Geojson_Checksum_Normalized_Model_ObjectiveUpdateInput = {
    other_objectives?: InputMaybe<Scalars['String']>;
    other_objectives_unset?: InputMaybe<Scalars['Boolean']>;
};

export type Geojson_Checksum_Normalized_VariableUpdateInput = {
    VariableType?: InputMaybe<Scalars['String']>;
    NoDataValue_unset?: InputMaybe<Scalars['Boolean']>;
    Speciation_unset?: InputMaybe<Scalars['Boolean']>;
    VariableCode?: InputMaybe<Scalars['String']>;
    VariableCode_unset?: InputMaybe<Scalars['Boolean']>;
    Speciation?: InputMaybe<Scalars['String']>;
    timeSeriesResultUUID?: InputMaybe<Scalars['String']>;
    VariableName_unset?: InputMaybe<Scalars['Boolean']>;
    timeSeriesResultUUID_unset?: InputMaybe<Scalars['Boolean']>;
    VariableName?: InputMaybe<Scalars['String']>;
    VariableType_unset?: InputMaybe<Scalars['Boolean']>;
    NoDataValue?: InputMaybe<Scalars['String']>;
};

export type Geojson_Checksum_NormalizedSpatial_CoverageGeometry = {
    __typename?: 'Geojson_checksum_normalizedSpatial_coverageGeometry';
    type?: Maybe<Scalars['String']>;
};

export type Geojson_Checksum_Normalized_Cell_Information = {
    __typename?: 'Geojson_checksum_normalized_cell_information';
    cellDataType?: Maybe<Scalars['String']>;
    cellSizeXValue?: Maybe<Scalars['String']>;
    cellSizeYValue?: Maybe<Scalars['String']>;
    columns?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    rows?: Maybe<Scalars['String']>;
};

export type Geojson_Checksum_Normalized_Processing_Level = {
    __typename?: 'Geojson_checksum_normalized_processing_level';
    Definition?: Maybe<Scalars['String']>;
    Explanation?: Maybe<Scalars['String']>;
    ProcessingLevelCode?: Maybe<Scalars['String']>;
    timeSeriesResultUUID?: Maybe<Scalars['String']>;
};

export type Geojson_Checksum_NormalizedFunding_Agency = {
    __typename?: 'Geojson_checksum_normalizedFunding_agency';
    awardNumber?: Maybe<Scalars['String']>;
    awardTitle?: Maybe<Scalars['String']>;
    fundingAgencyName?: Maybe<Scalars['String']>;
    fundingAgencyURL?: Maybe<Scalars['String']>;
};

export type Geojson_Checksum_Normalized_Simulation_TypeInsertInput = {
    simulation_type_name?: InputMaybe<Scalars['String']>;
};

export type Geojson_Checksum_Normalized_VersionInsertInput = {
    value?: InputMaybe<Scalars['String']>;
};

export type Geojson_Checksum_NormalizedOriginalcoverageInsertInput = {
    projection_name?: InputMaybe<Scalars['String']>;
    projection_string?: InputMaybe<Scalars['String']>;
    southlimit?: InputMaybe<Scalars['String']>;
    unit?: InputMaybe<Scalars['String']>;
    westlimit?: InputMaybe<Scalars['String']>;
    datum?: InputMaybe<Scalars['String']>;
    eastlimit?: InputMaybe<Scalars['String']>;
    northlimit?: InputMaybe<Scalars['String']>;
};

export type Geojson_Checksum_Normalized_Tool_IconInsertInput = {
    value?: InputMaybe<Scalars['String']>;
    data_url?: InputMaybe<Scalars['String']>;
};

export type Geojson_Checksum_Normalized_Model_InputUpdateInput = {
    simulationTimeStepValue?: InputMaybe<Scalars['String']>;
    soilDataSourceName?: InputMaybe<Scalars['String']>;
    warmupPeriodValue_unset?: InputMaybe<Scalars['Boolean']>;
    numberOfHRUs?: InputMaybe<Scalars['String']>;
    landUseDataSourceURL_unset?: InputMaybe<Scalars['Boolean']>;
    rainfallTimeStepValue_unset?: InputMaybe<Scalars['Boolean']>;
    routingTimeStepType_unset?: InputMaybe<Scalars['Boolean']>;
    rainfallTimeStepType_unset?: InputMaybe<Scalars['Boolean']>;
    demResolution_unset?: InputMaybe<Scalars['Boolean']>;
    soilDataSourceURL?: InputMaybe<Scalars['String']>;
    routingTimeStepType?: InputMaybe<Scalars['String']>;
    simulationTimeStepValue_unset?: InputMaybe<Scalars['Boolean']>;
    demSourceName?: InputMaybe<Scalars['String']>;
    landUseDataSourceName?: InputMaybe<Scalars['String']>;
    soilDataSourceName_unset?: InputMaybe<Scalars['Boolean']>;
    landUseDataSourceURL?: InputMaybe<Scalars['String']>;
    demSourceURL?: InputMaybe<Scalars['String']>;
    routingTimeStepValue_unset?: InputMaybe<Scalars['Boolean']>;
    watershedArea_unset?: InputMaybe<Scalars['Boolean']>;
    rainfallTimeStepType?: InputMaybe<Scalars['String']>;
    rainfallTimeStepValue?: InputMaybe<Scalars['String']>;
    simulationTimeStepType?: InputMaybe<Scalars['String']>;
    numberOfSubbasins_unset?: InputMaybe<Scalars['Boolean']>;
    landUseDataSourceName_unset?: InputMaybe<Scalars['Boolean']>;
    numberOfSubbasins?: InputMaybe<Scalars['String']>;
    simulationTimeStepType_unset?: InputMaybe<Scalars['Boolean']>;
    demSourceURL_unset?: InputMaybe<Scalars['Boolean']>;
    routingTimeStepValue?: InputMaybe<Scalars['String']>;
    numberOfHRUs_unset?: InputMaybe<Scalars['Boolean']>;
    demSourceName_unset?: InputMaybe<Scalars['Boolean']>;
    watershedArea?: InputMaybe<Scalars['String']>;
    demResolution?: InputMaybe<Scalars['String']>;
    soilDataSourceURL_unset?: InputMaybe<Scalars['Boolean']>;
    warmupPeriodValue?: InputMaybe<Scalars['String']>;
};

export type Geojson_Checksum_Normalized_Method = {
    __typename?: 'Geojson_checksum_normalized_method';
    MethodCode?: Maybe<Scalars['String']>;
    MethodDescription?: Maybe<Scalars['String']>;
    MethodName?: Maybe<Scalars['String']>;
    MethodType?: Maybe<Scalars['String']>;
    timeSeriesResultUUID?: Maybe<Scalars['String']>;
};

export type Geojson_Checksum_Normalized_Model_OutputInsertInput = {
    includes_output?: InputMaybe<Scalars['String']>;
};

export type Geojson_Checksum_NormalizedFunding_AgencyInsertInput = {
    fundingAgencyURL?: InputMaybe<Scalars['String']>;
    awardNumber?: InputMaybe<Scalars['String']>;
    awardTitle?: InputMaybe<Scalars['String']>;
    fundingAgencyName?: InputMaybe<Scalars['String']>;
};

export type Geojson_Checksum_NormalizedFieldinformationInsertInput = {
    fieldTypeCode?: InputMaybe<Scalars['String']>;
    fieldWidth?: InputMaybe<Scalars['String']>;
    fieldName?: InputMaybe<Scalars['String']>;
    fieldPrecision?: InputMaybe<Scalars['String']>;
    fieldType?: InputMaybe<Scalars['String']>;
};

export type Geojson_Checksum_Normalized_Time_Series_ResultInsertInput = {
    ValueCount?: InputMaybe<Scalars['String']>;
    timeSeriesResultUUID?: InputMaybe<Scalars['String']>;
    AggregationStatistic?: InputMaybe<Scalars['String']>;
    SampleMedium?: InputMaybe<Scalars['String']>;
    Status?: InputMaybe<Scalars['String']>;
    UnitsAbbreviation?: InputMaybe<Scalars['String']>;
    UnitsName?: InputMaybe<Scalars['String']>;
    UnitsType?: InputMaybe<Scalars['String']>;
};

export type Geojson_Checksum_Normalized_Band_InformationUpdateInput = {
    comment_unset?: InputMaybe<Scalars['Boolean']>;
    minimumValue_unset?: InputMaybe<Scalars['Boolean']>;
    variableName_unset?: InputMaybe<Scalars['Boolean']>;
    name?: InputMaybe<Scalars['String']>;
    variableName?: InputMaybe<Scalars['String']>;
    maximumValue?: InputMaybe<Scalars['String']>;
    method?: InputMaybe<Scalars['String']>;
    variableUnit_unset?: InputMaybe<Scalars['Boolean']>;
    comment?: InputMaybe<Scalars['String']>;
    maximumValue_unset?: InputMaybe<Scalars['Boolean']>;
    minimumValue?: InputMaybe<Scalars['String']>;
    noDataValue?: InputMaybe<Scalars['String']>;
    method_unset?: InputMaybe<Scalars['Boolean']>;
    noDataValue_unset?: InputMaybe<Scalars['Boolean']>;
    variableUnit?: InputMaybe<Scalars['String']>;
    name_unset?: InputMaybe<Scalars['Boolean']>;
};

export type Geojson_Checksum_Normalized_Ori_CoverageUpdateInput = {
    _value?: InputMaybe<Scalars['String']>;
    _value_unset?: InputMaybe<Scalars['Boolean']>;
};

export type Geojson_Checksum_NormalizedSpatial_CoverageUpdateInput = {
    type?: InputMaybe<Scalars['String']>;
    type_unset?: InputMaybe<Scalars['Boolean']>;
    geometry?: InputMaybe<Geojson_Checksum_NormalizedSpatial_CoverageGeometryUpdateInput>;
    geometry_unset?: InputMaybe<Scalars['Boolean']>;
};

export type Geojson_Checksum_Normalized_Homepage_Url = {
    __typename?: 'Geojson_checksum_normalized_homepage_url';
    value?: Maybe<Scalars['String']>;
};

export type Geojson_Checksum_NormalizedRelation = {
    __typename?: 'Geojson_checksum_normalizedRelation';
    type?: Maybe<Scalars['String']>;
    value?: Maybe<Scalars['String']>;
};

export type Geojson_Checksum_NormalizedSpatial_CoverageQueryInput = {
    OR?: InputMaybe<Array<Geojson_Checksum_NormalizedSpatial_CoverageQueryInput>>;
    type_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    type_lte?: InputMaybe<Scalars['String']>;
    type_ne?: InputMaybe<Scalars['String']>;
    geometry?: InputMaybe<Geojson_Checksum_NormalizedSpatial_CoverageGeometryQueryInput>;
    type_lt?: InputMaybe<Scalars['String']>;
    AND?: InputMaybe<Array<Geojson_Checksum_NormalizedSpatial_CoverageQueryInput>>;
    type_gte?: InputMaybe<Scalars['String']>;
    type_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    type_exists?: InputMaybe<Scalars['Boolean']>;
    type_gt?: InputMaybe<Scalars['String']>;
    geometry_exists?: InputMaybe<Scalars['Boolean']>;
    type?: InputMaybe<Scalars['String']>;
};

export type Geojson_Checksum_Normalized_Homepage_UrlQueryInput = {
    value_gte?: InputMaybe<Scalars['String']>;
    value?: InputMaybe<Scalars['String']>;
    value_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    value_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    value_gt?: InputMaybe<Scalars['String']>;
    AND?: InputMaybe<Array<Geojson_Checksum_Normalized_Homepage_UrlQueryInput>>;
    value_ne?: InputMaybe<Scalars['String']>;
    value_exists?: InputMaybe<Scalars['Boolean']>;
    value_lte?: InputMaybe<Scalars['String']>;
    value_lt?: InputMaybe<Scalars['String']>;
    OR?: InputMaybe<Array<Geojson_Checksum_Normalized_Homepage_UrlQueryInput>>;
};

export type Geojson_Checksum_Normalized_Stress_PeriodUpdateInput = {
    stressPeriodType?: InputMaybe<Scalars['String']>;
    stressPeriodType_unset?: InputMaybe<Scalars['Boolean']>;
};

export type Geojson_Checksum_NormalizedFunding_AgencyUpdateInput = {
    awardNumber?: InputMaybe<Scalars['String']>;
    awardNumber_unset?: InputMaybe<Scalars['Boolean']>;
    awardTitle?: InputMaybe<Scalars['String']>;
    awardTitle_unset?: InputMaybe<Scalars['Boolean']>;
    fundingAgencyName?: InputMaybe<Scalars['String']>;
    fundingAgencyName_unset?: InputMaybe<Scalars['Boolean']>;
    fundingAgencyURL?: InputMaybe<Scalars['String']>;
    fundingAgencyURL_unset?: InputMaybe<Scalars['Boolean']>;
};

export type Geojson_Checksum_NormalizedUpdateInput = {
    _methods?: InputMaybe<Geojson_Checksum_Normalized_MethodUpdateInput>;
    _variables_unset?: InputMaybe<Scalars['Boolean']>;
    id_unset?: InputMaybe<Scalars['Boolean']>;
    modified?: InputMaybe<Scalars['String']>;
    _source_code_url_unset?: InputMaybe<Scalars['Boolean']>;
    identifiers_unset?: InputMaybe<Scalars['Boolean']>;
    creators_unset?: InputMaybe<Scalars['Boolean']>;
    _stress_period_unset?: InputMaybe<Scalars['Boolean']>;
    _cell_information_unset?: InputMaybe<Scalars['Boolean']>;
    _time_series_results_unset?: InputMaybe<Scalars['Boolean']>;
    _model_output_unset?: InputMaybe<Scalars['Boolean']>;
    fieldinformations?: InputMaybe<Array<InputMaybe<Geojson_Checksum_NormalizedFieldinformationUpdateInput>>>;
    _id?: InputMaybe<Scalars['ObjectId']>;
    _simulation_type?: InputMaybe<Geojson_Checksum_Normalized_Simulation_TypeUpdateInput>;
    modified_unset?: InputMaybe<Scalars['Boolean']>;
    abstract_unset?: InputMaybe<Scalars['Boolean']>;
    originalcoverages?: InputMaybe<Array<InputMaybe<Geojson_Checksum_NormalizedOriginalcoverageUpdateInput>>>;
    created?: InputMaybe<Scalars['String']>;
    fieldinformations_unset?: InputMaybe<Scalars['Boolean']>;
    contributors_unset?: InputMaybe<Scalars['Boolean']>;
    publisher_unset?: InputMaybe<Scalars['Boolean']>;
    funding_agencies_unset?: InputMaybe<Scalars['Boolean']>;
    _grid_dimensions_unset?: InputMaybe<Scalars['Boolean']>;
    _ori_coverage_unset?: InputMaybe<Scalars['Boolean']>;
    _source_code_url?: InputMaybe<Geojson_Checksum_Normalized_Source_Code_UrlUpdateInput>;
    _tool_icon?: InputMaybe<Geojson_Checksum_Normalized_Tool_IconUpdateInput>;
    _mpmetadata_unset?: InputMaybe<Scalars['Boolean']>;
    _stress_period?: InputMaybe<Geojson_Checksum_Normalized_Stress_PeriodUpdateInput>;
    _sites?: InputMaybe<Geojson_Checksum_Normalized_SiteUpdateInput>;
    _mpmetadata?: InputMaybe<Geojson_Checksum_Normalized_MpmetadatumUpdateInput>;
    _sites_unset?: InputMaybe<Scalars['Boolean']>;
    type?: InputMaybe<Scalars['String']>;
    _id_unset?: InputMaybe<Scalars['Boolean']>;
    geometryinformations_unset?: InputMaybe<Scalars['Boolean']>;
    _url_base_file?: InputMaybe<Geojson_Checksum_Normalized_Url_Base_FileUpdateInput>;
    originalcoverages_unset?: InputMaybe<Scalars['Boolean']>;
    title_unset?: InputMaybe<Scalars['Boolean']>;
    _model_input_unset?: InputMaybe<Scalars['Boolean']>;
    contributors?: InputMaybe<Array<InputMaybe<Geojson_Checksum_NormalizedContributorUpdateInput>>>;
    title?: InputMaybe<Scalars['String']>;
    ori_coverage?: InputMaybe<Array<InputMaybe<Geojson_Checksum_NormalizedOri_CoverageUpdateInput>>>;
    published_unset?: InputMaybe<Scalars['Boolean']>;
    language?: InputMaybe<Scalars['String']>;
    id?: InputMaybe<Scalars['String']>;
    identifiers?: InputMaybe<Array<InputMaybe<Geojson_Checksum_NormalizedIdentifierUpdateInput>>>;
    _url_base_file_unset?: InputMaybe<Scalars['Boolean']>;
    _tool_icon_unset?: InputMaybe<Scalars['Boolean']>;
    _version_unset?: InputMaybe<Scalars['Boolean']>;
    created_unset?: InputMaybe<Scalars['Boolean']>;
    abstract?: InputMaybe<Scalars['String']>;
    _time_series_results?: InputMaybe<Geojson_Checksum_Normalized_Time_Series_ResultUpdateInput>;
    _model_objective_unset?: InputMaybe<Scalars['Boolean']>;
    _supported_file_extensions_unset?: InputMaybe<Scalars['Boolean']>;
    _url_base?: InputMaybe<Geojson_Checksum_Normalized_Url_BaseUpdateInput>;
    rights?: InputMaybe<Geojson_Checksum_NormalizedRightUpdateInput>;
    _methods_unset?: InputMaybe<Scalars['Boolean']>;
    relations?: InputMaybe<Array<InputMaybe<Geojson_Checksum_NormalizedRelationUpdateInput>>>;
    _cell_information?: InputMaybe<Geojson_Checksum_Normalized_Cell_InformationUpdateInput>;
    _model_output?: InputMaybe<Geojson_Checksum_Normalized_Model_OutputUpdateInput>;
    type_unset?: InputMaybe<Scalars['Boolean']>;
    _executed_by_unset?: InputMaybe<Scalars['Boolean']>;
    published?: InputMaybe<Scalars['String']>;
    publisher?: InputMaybe<Geojson_Checksum_NormalizedPublisherUpdateInput>;
    variables_unset?: InputMaybe<Scalars['Boolean']>;
    funding_agencies?: InputMaybe<Array<InputMaybe<Geojson_Checksum_NormalizedFunding_AgencyUpdateInput>>>;
    files_unset?: InputMaybe<Scalars['Boolean']>;
    _grid_dimensions?: InputMaybe<Geojson_Checksum_Normalized_Grid_DimensionUpdateInput>;
    _homepage_url?: InputMaybe<Geojson_Checksum_Normalized_Homepage_UrlUpdateInput>;
    _url_base_unset?: InputMaybe<Scalars['Boolean']>;
    _variables?: InputMaybe<Geojson_Checksum_Normalized_VariableUpdateInput>;
    ori_coverage_unset?: InputMaybe<Scalars['Boolean']>;
    _version?: InputMaybe<Geojson_Checksum_Normalized_VersionUpdateInput>;
    _simulation_type_unset?: InputMaybe<Scalars['Boolean']>;
    creators?: InputMaybe<Array<InputMaybe<Geojson_Checksum_NormalizedCreatorUpdateInput>>>;
    spatial_coverage_unset?: InputMaybe<Scalars['Boolean']>;
    variables?: InputMaybe<Array<InputMaybe<Geojson_Checksum_NormalizedVariableUpdateInput>>>;
    rights_unset?: InputMaybe<Scalars['Boolean']>;
    relations_unset?: InputMaybe<Scalars['Boolean']>;
    _homepage_url_unset?: InputMaybe<Scalars['Boolean']>;
    _executed_by?: InputMaybe<Geojson_Checksum_Normalized_Executed_ByUpdateInput>;
    _band_information_unset?: InputMaybe<Scalars['Boolean']>;
    _band_information?: InputMaybe<Geojson_Checksum_Normalized_Band_InformationUpdateInput>;
    period_coverage?: InputMaybe<Geojson_Checksum_NormalizedPeriod_CoverageUpdateInput>;
    geometryinformations?: InputMaybe<Array<InputMaybe<Geojson_Checksum_NormalizedGeometryinformationUpdateInput>>>;
    files?: InputMaybe<Array<InputMaybe<Geojson_Checksum_NormalizedFileUpdateInput>>>;
    _processing_levels?: InputMaybe<Geojson_Checksum_Normalized_Processing_LevelUpdateInput>;
    _model_objective?: InputMaybe<Geojson_Checksum_Normalized_Model_ObjectiveUpdateInput>;
    language_unset?: InputMaybe<Scalars['Boolean']>;
    subjects?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    subjects_unset?: InputMaybe<Scalars['Boolean']>;
    _processing_levels_unset?: InputMaybe<Scalars['Boolean']>;
    period_coverage_unset?: InputMaybe<Scalars['Boolean']>;
    _model_input?: InputMaybe<Geojson_Checksum_Normalized_Model_InputUpdateInput>;
    spatial_coverage?: InputMaybe<Geojson_Checksum_NormalizedSpatial_CoverageUpdateInput>;
    _supported_file_extensions?: InputMaybe<Geojson_Checksum_Normalized_Supported_File_ExtensionUpdateInput>;
    _ori_coverage?: InputMaybe<Geojson_Checksum_Normalized_Ori_CoverageUpdateInput>;
};

export type Geojson_Checksum_NormalizedFileUpdateInput = {
    path?: InputMaybe<Scalars['String']>;
    size_unset?: InputMaybe<Scalars['Boolean']>;
    mime_type?: InputMaybe<Scalars['String']>;
    size?: InputMaybe<Scalars['Int']>;
    size_inc?: InputMaybe<Scalars['Int']>;
    checksum?: InputMaybe<Scalars['String']>;
    checksum_unset?: InputMaybe<Scalars['Boolean']>;
    mime_type_unset?: InputMaybe<Scalars['Boolean']>;
    path_unset?: InputMaybe<Scalars['Boolean']>;
};

export type Geojson_Checksum_Normalized_Ori_Coverage = {
    __typename?: 'Geojson_checksum_normalized_ori_coverage';
    _value?: Maybe<Scalars['String']>;
};

export type Geojson_Checksum_NormalizedCreatorQueryInput = {
    organization?: InputMaybe<Scalars['String']>;
    organization_lt?: InputMaybe<Scalars['String']>;
    organization_ne?: InputMaybe<Scalars['String']>;
    hydroshare_user_id_lte?: InputMaybe<Scalars['String']>;
    phone_ne?: InputMaybe<Scalars['String']>;
    address_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    organization_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    phone_gt?: InputMaybe<Scalars['String']>;
    email_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    phone_exists?: InputMaybe<Scalars['Boolean']>;
    address?: InputMaybe<Scalars['String']>;
    identifiers?: InputMaybe<Scalars['String']>;
    homepage_ne?: InputMaybe<Scalars['String']>;
    identifiers_ne?: InputMaybe<Scalars['String']>;
    phone_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    creatorOrder_lt?: InputMaybe<Scalars['String']>;
    organization_gt?: InputMaybe<Scalars['String']>;
    creatorOrder?: InputMaybe<Scalars['String']>;
    homepage_lte?: InputMaybe<Scalars['String']>;
    email_lte?: InputMaybe<Scalars['String']>;
    name_gt?: InputMaybe<Scalars['String']>;
    name_lt?: InputMaybe<Scalars['String']>;
    hydroshare_user_id_gt?: InputMaybe<Scalars['String']>;
    name?: InputMaybe<Scalars['String']>;
    identifiers_gt?: InputMaybe<Scalars['String']>;
    creatorOrder_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    address_gte?: InputMaybe<Scalars['String']>;
    identifiers_gte?: InputMaybe<Scalars['String']>;
    name_exists?: InputMaybe<Scalars['Boolean']>;
    address_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    email_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    organization_exists?: InputMaybe<Scalars['Boolean']>;
    creatorOrder_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    creatorOrder_gt?: InputMaybe<Scalars['String']>;
    hydroshare_user_id?: InputMaybe<Scalars['String']>;
    name_gte?: InputMaybe<Scalars['String']>;
    address_lte?: InputMaybe<Scalars['String']>;
    email?: InputMaybe<Scalars['String']>;
    homepage_gt?: InputMaybe<Scalars['String']>;
    creatorOrder_gte?: InputMaybe<Scalars['String']>;
    hydroshare_user_id_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    name_ne?: InputMaybe<Scalars['String']>;
    organization_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    OR?: InputMaybe<Array<Geojson_Checksum_NormalizedCreatorQueryInput>>;
    hydroshare_user_id_gte?: InputMaybe<Scalars['String']>;
    email_ne?: InputMaybe<Scalars['String']>;
    organization_lte?: InputMaybe<Scalars['String']>;
    homepage?: InputMaybe<Scalars['String']>;
    email_exists?: InputMaybe<Scalars['Boolean']>;
    homepage_gte?: InputMaybe<Scalars['String']>;
    identifiers_lte?: InputMaybe<Scalars['String']>;
    email_lt?: InputMaybe<Scalars['String']>;
    name_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    identifiers_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    phone?: InputMaybe<Scalars['String']>;
    organization_gte?: InputMaybe<Scalars['String']>;
    address_lt?: InputMaybe<Scalars['String']>;
    hydroshare_user_id_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    phone_lt?: InputMaybe<Scalars['String']>;
    phone_gte?: InputMaybe<Scalars['String']>;
    homepage_exists?: InputMaybe<Scalars['Boolean']>;
    hydroshare_user_id_lt?: InputMaybe<Scalars['String']>;
    address_ne?: InputMaybe<Scalars['String']>;
    name_lte?: InputMaybe<Scalars['String']>;
    AND?: InputMaybe<Array<Geojson_Checksum_NormalizedCreatorQueryInput>>;
    creatorOrder_lte?: InputMaybe<Scalars['String']>;
    phone_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    creatorOrder_exists?: InputMaybe<Scalars['Boolean']>;
    email_gte?: InputMaybe<Scalars['String']>;
    homepage_lt?: InputMaybe<Scalars['String']>;
    address_gt?: InputMaybe<Scalars['String']>;
    identifiers_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    address_exists?: InputMaybe<Scalars['Boolean']>;
    identifiers_exists?: InputMaybe<Scalars['Boolean']>;
    phone_lte?: InputMaybe<Scalars['String']>;
    hydroshare_user_id_exists?: InputMaybe<Scalars['Boolean']>;
    name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    email_gt?: InputMaybe<Scalars['String']>;
    creatorOrder_ne?: InputMaybe<Scalars['String']>;
    homepage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    hydroshare_user_id_ne?: InputMaybe<Scalars['String']>;
    identifiers_lt?: InputMaybe<Scalars['String']>;
    homepage_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Geojson_Checksum_Normalized_Executed_ByQueryInput = {
    model_program_fk_gt?: InputMaybe<Scalars['String']>;
    model_name_gte?: InputMaybe<Scalars['String']>;
    model_name?: InputMaybe<Scalars['String']>;
    model_program_fk_lt?: InputMaybe<Scalars['String']>;
    model_program_fk_gte?: InputMaybe<Scalars['String']>;
    model_program_fk_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    model_program_fk?: InputMaybe<Scalars['String']>;
    model_name_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    AND?: InputMaybe<Array<Geojson_Checksum_Normalized_Executed_ByQueryInput>>;
    model_name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    model_name_lt?: InputMaybe<Scalars['String']>;
    model_name_lte?: InputMaybe<Scalars['String']>;
    model_program_fk_lte?: InputMaybe<Scalars['String']>;
    model_program_fk_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    model_name_ne?: InputMaybe<Scalars['String']>;
    model_name_gt?: InputMaybe<Scalars['String']>;
    model_name_exists?: InputMaybe<Scalars['Boolean']>;
    model_program_fk_ne?: InputMaybe<Scalars['String']>;
    model_program_fk_exists?: InputMaybe<Scalars['Boolean']>;
    OR?: InputMaybe<Array<Geojson_Checksum_Normalized_Executed_ByQueryInput>>;
};

export type Geojson_Checksum_NormalizedSpatial_CoverageInsertInput = {
    type?: InputMaybe<Scalars['String']>;
    geometry?: InputMaybe<Geojson_Checksum_NormalizedSpatial_CoverageGeometryInsertInput>;
};

export type Geojson_Checksum_NormalizedPublisherInsertInput = {
    publisherName?: InputMaybe<Scalars['String']>;
    publisherURL?: InputMaybe<Scalars['String']>;
};

export type Geojson_Checksum_Normalized_Stress_PeriodInsertInput = {
    stressPeriodType?: InputMaybe<Scalars['String']>;
};

export type Geojson_Checksum_Normalized_Executed_ByUpdateInput = {
    model_name_unset?: InputMaybe<Scalars['Boolean']>;
    model_program_fk?: InputMaybe<Scalars['String']>;
    model_program_fk_unset?: InputMaybe<Scalars['Boolean']>;
    model_name?: InputMaybe<Scalars['String']>;
};

export type Geojson_Checksum_Normalized_Model_Input = {
    __typename?: 'Geojson_checksum_normalized_model_input';
    demResolution?: Maybe<Scalars['String']>;
    demSourceName?: Maybe<Scalars['String']>;
    demSourceURL?: Maybe<Scalars['String']>;
    landUseDataSourceName?: Maybe<Scalars['String']>;
    landUseDataSourceURL?: Maybe<Scalars['String']>;
    numberOfHRUs?: Maybe<Scalars['String']>;
    numberOfSubbasins?: Maybe<Scalars['String']>;
    rainfallTimeStepType?: Maybe<Scalars['String']>;
    rainfallTimeStepValue?: Maybe<Scalars['String']>;
    routingTimeStepType?: Maybe<Scalars['String']>;
    routingTimeStepValue?: Maybe<Scalars['String']>;
    simulationTimeStepType?: Maybe<Scalars['String']>;
    simulationTimeStepValue?: Maybe<Scalars['String']>;
    soilDataSourceName?: Maybe<Scalars['String']>;
    soilDataSourceURL?: Maybe<Scalars['String']>;
    warmupPeriodValue?: Maybe<Scalars['String']>;
    watershedArea?: Maybe<Scalars['String']>;
};

export type Geojson_Checksum_Normalized_Supported_File_Extension = {
    __typename?: 'Geojson_checksum_normalized_supported_file_extension';
    value?: Maybe<Scalars['String']>;
};

export type Geojson_Checksum_Normalized_Model_Objective = {
    __typename?: 'Geojson_checksum_normalized_model_objective';
    other_objectives?: Maybe<Scalars['String']>;
};

export type Geojson_Checksum_NormalizedIdentifierQueryInput = {
    url_ne?: InputMaybe<Scalars['String']>;
    name?: InputMaybe<Scalars['String']>;
    url_gt?: InputMaybe<Scalars['String']>;
    url_exists?: InputMaybe<Scalars['Boolean']>;
    name_gt?: InputMaybe<Scalars['String']>;
    name_lt?: InputMaybe<Scalars['String']>;
    url?: InputMaybe<Scalars['String']>;
    name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    url_gte?: InputMaybe<Scalars['String']>;
    url_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    OR?: InputMaybe<Array<Geojson_Checksum_NormalizedIdentifierQueryInput>>;
    url_lte?: InputMaybe<Scalars['String']>;
    url_lt?: InputMaybe<Scalars['String']>;
    url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    AND?: InputMaybe<Array<Geojson_Checksum_NormalizedIdentifierQueryInput>>;
    name_ne?: InputMaybe<Scalars['String']>;
    name_lte?: InputMaybe<Scalars['String']>;
    name_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    name_gte?: InputMaybe<Scalars['String']>;
    name_exists?: InputMaybe<Scalars['Boolean']>;
};

export type Geojson_Checksum_NormalizedFieldinformationUpdateInput = {
    fieldType?: InputMaybe<Scalars['String']>;
    fieldWidth_unset?: InputMaybe<Scalars['Boolean']>;
    fieldPrecision?: InputMaybe<Scalars['String']>;
    fieldPrecision_unset?: InputMaybe<Scalars['Boolean']>;
    fieldType_unset?: InputMaybe<Scalars['Boolean']>;
    fieldTypeCode?: InputMaybe<Scalars['String']>;
    fieldTypeCode_unset?: InputMaybe<Scalars['Boolean']>;
    fieldName?: InputMaybe<Scalars['String']>;
    fieldName_unset?: InputMaybe<Scalars['Boolean']>;
    fieldWidth?: InputMaybe<Scalars['String']>;
};

export type Geojson_Checksum_Normalized_Band_InformationInsertInput = {
    noDataValue?: InputMaybe<Scalars['String']>;
    variableName?: InputMaybe<Scalars['String']>;
    variableUnit?: InputMaybe<Scalars['String']>;
    comment?: InputMaybe<Scalars['String']>;
    maximumValue?: InputMaybe<Scalars['String']>;
    method?: InputMaybe<Scalars['String']>;
    minimumValue?: InputMaybe<Scalars['String']>;
    name?: InputMaybe<Scalars['String']>;
};

export type Geojson_Checksum_NormalizedVariableInsertInput = {
    unit?: InputMaybe<Scalars['String']>;
    descriptive_name?: InputMaybe<Scalars['String']>;
    method?: InputMaybe<Scalars['String']>;
    missing_value?: InputMaybe<Scalars['String']>;
    name?: InputMaybe<Scalars['String']>;
    shape?: InputMaybe<Scalars['String']>;
    type?: InputMaybe<Scalars['String']>;
};

export type Geojson_Checksum_NormalizedGeometryinformation = {
    __typename?: 'Geojson_checksum_normalizedGeometryinformation';
    featureCount?: Maybe<Scalars['String']>;
    geometryType?: Maybe<Scalars['String']>;
};

export type Geojson_Checksum_Normalized_Url_Base = {
    __typename?: 'Geojson_checksum_normalized_url_base';
    value?: Maybe<Scalars['String']>;
};

export type Geojson_Checksum_NormalizedVariableQueryInput = {
    descriptive_name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    shape?: InputMaybe<Scalars['String']>;
    unit_gt?: InputMaybe<Scalars['String']>;
    type_ne?: InputMaybe<Scalars['String']>;
    descriptive_name_gt?: InputMaybe<Scalars['String']>;
    method_exists?: InputMaybe<Scalars['Boolean']>;
    missing_value_ne?: InputMaybe<Scalars['String']>;
    shape_exists?: InputMaybe<Scalars['Boolean']>;
    shape_gte?: InputMaybe<Scalars['String']>;
    unit_exists?: InputMaybe<Scalars['Boolean']>;
    method_ne?: InputMaybe<Scalars['String']>;
    AND?: InputMaybe<Array<Geojson_Checksum_NormalizedVariableQueryInput>>;
    name_ne?: InputMaybe<Scalars['String']>;
    missing_value_gte?: InputMaybe<Scalars['String']>;
    method_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    name_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    name?: InputMaybe<Scalars['String']>;
    missing_value_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    shape_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    method?: InputMaybe<Scalars['String']>;
    OR?: InputMaybe<Array<Geojson_Checksum_NormalizedVariableQueryInput>>;
    shape_lt?: InputMaybe<Scalars['String']>;
    missing_value_exists?: InputMaybe<Scalars['Boolean']>;
    name_gte?: InputMaybe<Scalars['String']>;
    descriptive_name_lte?: InputMaybe<Scalars['String']>;
    type?: InputMaybe<Scalars['String']>;
    method_lt?: InputMaybe<Scalars['String']>;
    shape_gt?: InputMaybe<Scalars['String']>;
    type_gte?: InputMaybe<Scalars['String']>;
    type_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    method_lte?: InputMaybe<Scalars['String']>;
    unit_ne?: InputMaybe<Scalars['String']>;
    missing_value?: InputMaybe<Scalars['String']>;
    type_lt?: InputMaybe<Scalars['String']>;
    method_gte?: InputMaybe<Scalars['String']>;
    unit_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    method_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    unit_gte?: InputMaybe<Scalars['String']>;
    descriptive_name_gte?: InputMaybe<Scalars['String']>;
    descriptive_name?: InputMaybe<Scalars['String']>;
    type_lte?: InputMaybe<Scalars['String']>;
    missing_value_lt?: InputMaybe<Scalars['String']>;
    missing_value_lte?: InputMaybe<Scalars['String']>;
    method_gt?: InputMaybe<Scalars['String']>;
    name_lt?: InputMaybe<Scalars['String']>;
    name_exists?: InputMaybe<Scalars['Boolean']>;
    type_gt?: InputMaybe<Scalars['String']>;
    shape_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    unit_lt?: InputMaybe<Scalars['String']>;
    type_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    descriptive_name_lt?: InputMaybe<Scalars['String']>;
    name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    unit?: InputMaybe<Scalars['String']>;
    descriptive_name_ne?: InputMaybe<Scalars['String']>;
    shape_lte?: InputMaybe<Scalars['String']>;
    descriptive_name_exists?: InputMaybe<Scalars['Boolean']>;
    name_lte?: InputMaybe<Scalars['String']>;
    missing_value_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    name_gt?: InputMaybe<Scalars['String']>;
    missing_value_gt?: InputMaybe<Scalars['String']>;
    unit_lte?: InputMaybe<Scalars['String']>;
    descriptive_name_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    type_exists?: InputMaybe<Scalars['Boolean']>;
    shape_ne?: InputMaybe<Scalars['String']>;
    unit_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Mutation = {
    __typename?: 'Mutation';
    deleteManyGeojson_checksum_normalizeds?: Maybe<DeleteManyPayload>;
    deleteOneGeojson_checksum_normalized?: Maybe<Geojson_Checksum_Normalized>;
    insertManyGeojson_checksum_normalizeds?: Maybe<InsertManyPayload>;
    insertOneGeojson_checksum_normalized?: Maybe<Geojson_Checksum_Normalized>;
    replaceOneGeojson_checksum_normalized?: Maybe<Geojson_Checksum_Normalized>;
    updateManyGeojson_checksum_normalizeds?: Maybe<UpdateManyPayload>;
    updateOneGeojson_checksum_normalized?: Maybe<Geojson_Checksum_Normalized>;
    upsertOneGeojson_checksum_normalized?: Maybe<Geojson_Checksum_Normalized>;
};


export type MutationDeleteManyGeojson_Checksum_NormalizedsArgs = {
    query?: InputMaybe<Geojson_Checksum_NormalizedQueryInput>;
};


export type MutationDeleteOneGeojson_Checksum_NormalizedArgs = {
    query: Geojson_Checksum_NormalizedQueryInput;
};


export type MutationInsertManyGeojson_Checksum_NormalizedsArgs = {
    data: Array<Geojson_Checksum_NormalizedInsertInput>;
};


export type MutationInsertOneGeojson_Checksum_NormalizedArgs = {
    data: Geojson_Checksum_NormalizedInsertInput;
};


export type MutationReplaceOneGeojson_Checksum_NormalizedArgs = {
    query?: InputMaybe<Geojson_Checksum_NormalizedQueryInput>;
    data: Geojson_Checksum_NormalizedInsertInput;
};


export type MutationUpdateManyGeojson_Checksum_NormalizedsArgs = {
    query?: InputMaybe<Geojson_Checksum_NormalizedQueryInput>;
    set: Geojson_Checksum_NormalizedUpdateInput;
};


export type MutationUpdateOneGeojson_Checksum_NormalizedArgs = {
    set: Geojson_Checksum_NormalizedUpdateInput;
    query?: InputMaybe<Geojson_Checksum_NormalizedQueryInput>;
};


export type MutationUpsertOneGeojson_Checksum_NormalizedArgs = {
    query?: InputMaybe<Geojson_Checksum_NormalizedQueryInput>;
    data: Geojson_Checksum_NormalizedInsertInput;
};

export type Geojson_Checksum_NormalizedInsertInput = {
    rights?: InputMaybe<Geojson_Checksum_NormalizedRightInsertInput>;
    _ori_coverage?: InputMaybe<Geojson_Checksum_Normalized_Ori_CoverageInsertInput>;
    spatial_coverage?: InputMaybe<Geojson_Checksum_NormalizedSpatial_CoverageInsertInput>;
    _cell_information?: InputMaybe<Geojson_Checksum_Normalized_Cell_InformationInsertInput>;
    _band_information?: InputMaybe<Geojson_Checksum_Normalized_Band_InformationInsertInput>;
    _model_output?: InputMaybe<Geojson_Checksum_Normalized_Model_OutputInsertInput>;
    funding_agencies?: InputMaybe<Array<InputMaybe<Geojson_Checksum_NormalizedFunding_AgencyInsertInput>>>;
    subjects?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    _executed_by?: InputMaybe<Geojson_Checksum_Normalized_Executed_ByInsertInput>;
    _model_input?: InputMaybe<Geojson_Checksum_Normalized_Model_InputInsertInput>;
    geometryinformations?: InputMaybe<Array<InputMaybe<Geojson_Checksum_NormalizedGeometryinformationInsertInput>>>;
    period_coverage?: InputMaybe<Geojson_Checksum_NormalizedPeriod_CoverageInsertInput>;
    publisher?: InputMaybe<Geojson_Checksum_NormalizedPublisherInsertInput>;
    relations?: InputMaybe<Array<InputMaybe<Geojson_Checksum_NormalizedRelationInsertInput>>>;
    originalcoverages?: InputMaybe<Array<InputMaybe<Geojson_Checksum_NormalizedOriginalcoverageInsertInput>>>;
    identifiers?: InputMaybe<Array<InputMaybe<Geojson_Checksum_NormalizedIdentifierInsertInput>>>;
    _mpmetadata?: InputMaybe<Geojson_Checksum_Normalized_MpmetadatumInsertInput>;
    variables?: InputMaybe<Array<InputMaybe<Geojson_Checksum_NormalizedVariableInsertInput>>>;
    type?: InputMaybe<Scalars['String']>;
    id?: InputMaybe<Scalars['String']>;
    _grid_dimensions?: InputMaybe<Geojson_Checksum_Normalized_Grid_DimensionInsertInput>;
    fieldinformations?: InputMaybe<Array<InputMaybe<Geojson_Checksum_NormalizedFieldinformationInsertInput>>>;
    _tool_icon?: InputMaybe<Geojson_Checksum_Normalized_Tool_IconInsertInput>;
    _sites?: InputMaybe<Geojson_Checksum_Normalized_SiteInsertInput>;
    contributors?: InputMaybe<Array<InputMaybe<Geojson_Checksum_NormalizedContributorInsertInput>>>;
    files?: InputMaybe<Array<InputMaybe<Geojson_Checksum_NormalizedFileInsertInput>>>;
    language?: InputMaybe<Scalars['String']>;
    published?: InputMaybe<Scalars['String']>;
    _simulation_type?: InputMaybe<Geojson_Checksum_Normalized_Simulation_TypeInsertInput>;
    _processing_levels?: InputMaybe<Geojson_Checksum_Normalized_Processing_LevelInsertInput>;
    modified?: InputMaybe<Scalars['String']>;
    _version?: InputMaybe<Geojson_Checksum_Normalized_VersionInsertInput>;
    _stress_period?: InputMaybe<Geojson_Checksum_Normalized_Stress_PeriodInsertInput>;
    abstract?: InputMaybe<Scalars['String']>;
    title?: InputMaybe<Scalars['String']>;
    ori_coverage?: InputMaybe<Array<InputMaybe<Geojson_Checksum_NormalizedOri_CoverageInsertInput>>>;
    created?: InputMaybe<Scalars['String']>;
    _variables?: InputMaybe<Geojson_Checksum_Normalized_VariableInsertInput>;
    _url_base?: InputMaybe<Geojson_Checksum_Normalized_Url_BaseInsertInput>;
    _source_code_url?: InputMaybe<Geojson_Checksum_Normalized_Source_Code_UrlInsertInput>;
    creators?: InputMaybe<Array<InputMaybe<Geojson_Checksum_NormalizedCreatorInsertInput>>>;
    _model_objective?: InputMaybe<Geojson_Checksum_Normalized_Model_ObjectiveInsertInput>;
    _id?: InputMaybe<Scalars['ObjectId']>;
    _methods?: InputMaybe<Geojson_Checksum_Normalized_MethodInsertInput>;
    _homepage_url?: InputMaybe<Geojson_Checksum_Normalized_Homepage_UrlInsertInput>;
    _time_series_results?: InputMaybe<Geojson_Checksum_Normalized_Time_Series_ResultInsertInput>;
    _url_base_file?: InputMaybe<Geojson_Checksum_Normalized_Url_Base_FileInsertInput>;
    _supported_file_extensions?: InputMaybe<Geojson_Checksum_Normalized_Supported_File_ExtensionInsertInput>;
};

export type Geojson_Checksum_Normalized_Url_Base_FileInsertInput = {
    value?: InputMaybe<Scalars['String']>;
};

export type Geojson_Checksum_NormalizedOriginalcoverageUpdateInput = {
    projection_string_unset?: InputMaybe<Scalars['Boolean']>;
    westlimit_unset?: InputMaybe<Scalars['Boolean']>;
    datum_unset?: InputMaybe<Scalars['Boolean']>;
    eastlimit_unset?: InputMaybe<Scalars['Boolean']>;
    projection_name_unset?: InputMaybe<Scalars['Boolean']>;
    datum?: InputMaybe<Scalars['String']>;
    southlimit?: InputMaybe<Scalars['String']>;
    projection_string?: InputMaybe<Scalars['String']>;
    southlimit_unset?: InputMaybe<Scalars['Boolean']>;
    westlimit?: InputMaybe<Scalars['String']>;
    eastlimit?: InputMaybe<Scalars['String']>;
    unit?: InputMaybe<Scalars['String']>;
    northlimit_unset?: InputMaybe<Scalars['Boolean']>;
    unit_unset?: InputMaybe<Scalars['Boolean']>;
    projection_name?: InputMaybe<Scalars['String']>;
    northlimit?: InputMaybe<Scalars['String']>;
};

export type Geojson_Checksum_NormalizedCreatorUpdateInput = {
    identifiers_unset?: InputMaybe<Scalars['Boolean']>;
    creatorOrder_unset?: InputMaybe<Scalars['Boolean']>;
    hydroshare_user_id_unset?: InputMaybe<Scalars['Boolean']>;
    phone?: InputMaybe<Scalars['String']>;
    homepage?: InputMaybe<Scalars['String']>;
    name_unset?: InputMaybe<Scalars['Boolean']>;
    email_unset?: InputMaybe<Scalars['Boolean']>;
    identifiers?: InputMaybe<Scalars['String']>;
    email?: InputMaybe<Scalars['String']>;
    phone_unset?: InputMaybe<Scalars['Boolean']>;
    address_unset?: InputMaybe<Scalars['Boolean']>;
    organization?: InputMaybe<Scalars['String']>;
    creatorOrder?: InputMaybe<Scalars['String']>;
    hydroshare_user_id?: InputMaybe<Scalars['String']>;
    name?: InputMaybe<Scalars['String']>;
    address?: InputMaybe<Scalars['String']>;
    homepage_unset?: InputMaybe<Scalars['Boolean']>;
    organization_unset?: InputMaybe<Scalars['Boolean']>;
};

export type Geojson_Checksum_NormalizedCreator = {
    __typename?: 'Geojson_checksum_normalizedCreator';
    address?: Maybe<Scalars['String']>;
    creatorOrder?: Maybe<Scalars['String']>;
    email?: Maybe<Scalars['String']>;
    homepage?: Maybe<Scalars['String']>;
    hydroshare_user_id?: Maybe<Scalars['String']>;
    identifiers?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    organization?: Maybe<Scalars['String']>;
    phone?: Maybe<Scalars['String']>;
};

export type Geojson_Checksum_Normalized_Supported_File_ExtensionQueryInput = {
    OR?: InputMaybe<Array<Geojson_Checksum_Normalized_Supported_File_ExtensionQueryInput>>;
    value_gt?: InputMaybe<Scalars['String']>;
    value_lte?: InputMaybe<Scalars['String']>;
    value_gte?: InputMaybe<Scalars['String']>;
    value_lt?: InputMaybe<Scalars['String']>;
    value_ne?: InputMaybe<Scalars['String']>;
    AND?: InputMaybe<Array<Geojson_Checksum_Normalized_Supported_File_ExtensionQueryInput>>;
    value?: InputMaybe<Scalars['String']>;
    value_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    value_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    value_exists?: InputMaybe<Scalars['Boolean']>;
};

export type Geojson_Checksum_Normalized_Tool_IconQueryInput = {
    value?: InputMaybe<Scalars['String']>;
    value_exists?: InputMaybe<Scalars['Boolean']>;
    data_url_exists?: InputMaybe<Scalars['Boolean']>;
    data_url_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    data_url_gt?: InputMaybe<Scalars['String']>;
    data_url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    value_ne?: InputMaybe<Scalars['String']>;
    data_url_lt?: InputMaybe<Scalars['String']>;
    data_url_lte?: InputMaybe<Scalars['String']>;
    value_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    OR?: InputMaybe<Array<Geojson_Checksum_Normalized_Tool_IconQueryInput>>;
    value_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    value_gte?: InputMaybe<Scalars['String']>;
    value_lt?: InputMaybe<Scalars['String']>;
    data_url?: InputMaybe<Scalars['String']>;
    value_lte?: InputMaybe<Scalars['String']>;
    data_url_ne?: InputMaybe<Scalars['String']>;
    data_url_gte?: InputMaybe<Scalars['String']>;
    AND?: InputMaybe<Array<Geojson_Checksum_Normalized_Tool_IconQueryInput>>;
    value_gt?: InputMaybe<Scalars['String']>;
};

export type Geojson_Checksum_NormalizedContributorInsertInput = {
    homepage?: InputMaybe<Scalars['String']>;
    hydroshare_user_id?: InputMaybe<Scalars['String']>;
    identifiers?: InputMaybe<Scalars['String']>;
    name?: InputMaybe<Scalars['String']>;
    organization?: InputMaybe<Scalars['String']>;
    phone?: InputMaybe<Scalars['String']>;
    address?: InputMaybe<Scalars['String']>;
    email?: InputMaybe<Scalars['String']>;
};

export type Geojson_Checksum_NormalizedOri_CoverageUpdateInput = {
    projection_string_text?: InputMaybe<Scalars['String']>;
    projection_string_text_unset?: InputMaybe<Scalars['Boolean']>;
    projection_string_type?: InputMaybe<Scalars['String']>;
    projection_string_type_unset?: InputMaybe<Scalars['Boolean']>;
    _value?: InputMaybe<Scalars['String']>;
    _value_unset?: InputMaybe<Scalars['Boolean']>;
    datum?: InputMaybe<Scalars['String']>;
    datum_unset?: InputMaybe<Scalars['Boolean']>;
};

export type Geojson_Checksum_Normalized_Homepage_UrlUpdateInput = {
    value?: InputMaybe<Scalars['String']>;
    value_unset?: InputMaybe<Scalars['Boolean']>;
};

export type Geojson_Checksum_Normalized_Stress_PeriodQueryInput = {
    AND?: InputMaybe<Array<Geojson_Checksum_Normalized_Stress_PeriodQueryInput>>;
    OR?: InputMaybe<Array<Geojson_Checksum_Normalized_Stress_PeriodQueryInput>>;
    stressPeriodType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    stressPeriodType_exists?: InputMaybe<Scalars['Boolean']>;
    stressPeriodType_ne?: InputMaybe<Scalars['String']>;
    stressPeriodType_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    stressPeriodType_gt?: InputMaybe<Scalars['String']>;
    stressPeriodType_gte?: InputMaybe<Scalars['String']>;
    stressPeriodType_lt?: InputMaybe<Scalars['String']>;
    stressPeriodType_lte?: InputMaybe<Scalars['String']>;
    stressPeriodType?: InputMaybe<Scalars['String']>;
};

export type Geojson_Checksum_Normalized_Ori_CoverageInsertInput = {
    _value?: InputMaybe<Scalars['String']>;
};

export type Query = {
    __typename?: 'Query';
    geojson_checksum_normalized?: Maybe<Geojson_Checksum_Normalized>;
    geojson_checksum_normalizeds: Array<Maybe<Geojson_Checksum_Normalized>>;
    resource?: Maybe<Geojson_Checksum_Normalized>;
    title_abstract_search?: Maybe<Array<Maybe<Geojson_Checksum_Normalized>>>;
};


export type QueryGeojson_Checksum_NormalizedArgs = {
    query?: InputMaybe<Geojson_Checksum_NormalizedQueryInput>;
};


export type QueryGeojson_Checksum_NormalizedsArgs = {
    query?: InputMaybe<Geojson_Checksum_NormalizedQueryInput>;
    limit?: InputMaybe<Scalars['Int']>;
    sortBy?: InputMaybe<Geojson_Checksum_NormalizedSortByInput>;
};


export type QueryResourceArgs = {
    input?: InputMaybe<Scalars['String']>;
};


export type QueryTitle_Abstract_SearchArgs = {
    input?: InputMaybe<Title_Abstract_Search>;
};

export type Geojson_Checksum_Normalized_Url_Base_File = {
    __typename?: 'Geojson_checksum_normalized_url_base_file';
    value?: Maybe<Scalars['String']>;
};

export type Geojson_Checksum_Normalized_Model_Output = {
    __typename?: 'Geojson_checksum_normalized_model_output';
    includes_output?: Maybe<Scalars['String']>;
};

export type Geojson_Checksum_NormalizedFileQueryInput = {
    path?: InputMaybe<Scalars['String']>;
    AND?: InputMaybe<Array<Geojson_Checksum_NormalizedFileQueryInput>>;
    size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
    checksum?: InputMaybe<Scalars['String']>;
    mime_type_lte?: InputMaybe<Scalars['String']>;
    path_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    mime_type_lt?: InputMaybe<Scalars['String']>;
    checksum_exists?: InputMaybe<Scalars['Boolean']>;
    size_gt?: InputMaybe<Scalars['Int']>;
    checksum_gte?: InputMaybe<Scalars['String']>;
    OR?: InputMaybe<Array<Geojson_Checksum_NormalizedFileQueryInput>>;
    checksum_lt?: InputMaybe<Scalars['String']>;
    path_gt?: InputMaybe<Scalars['String']>;
    size_lte?: InputMaybe<Scalars['Int']>;
    size_exists?: InputMaybe<Scalars['Boolean']>;
    path_lt?: InputMaybe<Scalars['String']>;
    size_ne?: InputMaybe<Scalars['Int']>;
    checksum_gt?: InputMaybe<Scalars['String']>;
    mime_type_gt?: InputMaybe<Scalars['String']>;
    path_gte?: InputMaybe<Scalars['String']>;
    mime_type?: InputMaybe<Scalars['String']>;
    path_lte?: InputMaybe<Scalars['String']>;
    size_lt?: InputMaybe<Scalars['Int']>;
    path_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    size_gte?: InputMaybe<Scalars['Int']>;
    path_ne?: InputMaybe<Scalars['String']>;
    size?: InputMaybe<Scalars['Int']>;
    path_exists?: InputMaybe<Scalars['Boolean']>;
    checksum_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    mime_type_ne?: InputMaybe<Scalars['String']>;
    size_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
    mime_type_exists?: InputMaybe<Scalars['Boolean']>;
    checksum_lte?: InputMaybe<Scalars['String']>;
    checksum_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    checksum_ne?: InputMaybe<Scalars['String']>;
    mime_type_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    mime_type_gte?: InputMaybe<Scalars['String']>;
    mime_type_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Geojson_Checksum_NormalizedContributorQueryInput = {
    hydroshare_user_id_lt?: InputMaybe<Scalars['String']>;
    homepage?: InputMaybe<Scalars['String']>;
    identifiers?: InputMaybe<Scalars['String']>;
    email?: InputMaybe<Scalars['String']>;
    address_gt?: InputMaybe<Scalars['String']>;
    phone_lt?: InputMaybe<Scalars['String']>;
    email_exists?: InputMaybe<Scalars['Boolean']>;
    homepage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    homepage_gt?: InputMaybe<Scalars['String']>;
    homepage_exists?: InputMaybe<Scalars['Boolean']>;
    hydroshare_user_id_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    hydroshare_user_id_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    hydroshare_user_id?: InputMaybe<Scalars['String']>;
    email_gt?: InputMaybe<Scalars['String']>;
    organization?: InputMaybe<Scalars['String']>;
    email_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    identifiers_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    AND?: InputMaybe<Array<Geojson_Checksum_NormalizedContributorQueryInput>>;
    email_ne?: InputMaybe<Scalars['String']>;
    identifiers_lt?: InputMaybe<Scalars['String']>;
    phone_exists?: InputMaybe<Scalars['Boolean']>;
    address_lt?: InputMaybe<Scalars['String']>;
    homepage_gte?: InputMaybe<Scalars['String']>;
    phone_ne?: InputMaybe<Scalars['String']>;
    hydroshare_user_id_exists?: InputMaybe<Scalars['Boolean']>;
    address_exists?: InputMaybe<Scalars['Boolean']>;
    email_lt?: InputMaybe<Scalars['String']>;
    organization_lt?: InputMaybe<Scalars['String']>;
    name_exists?: InputMaybe<Scalars['Boolean']>;
    identifiers_exists?: InputMaybe<Scalars['Boolean']>;
    hydroshare_user_id_lte?: InputMaybe<Scalars['String']>;
    organization_exists?: InputMaybe<Scalars['Boolean']>;
    phone_gt?: InputMaybe<Scalars['String']>;
    address_gte?: InputMaybe<Scalars['String']>;
    phone_lte?: InputMaybe<Scalars['String']>;
    hydroshare_user_id_gte?: InputMaybe<Scalars['String']>;
    hydroshare_user_id_gt?: InputMaybe<Scalars['String']>;
    phone_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    organization_lte?: InputMaybe<Scalars['String']>;
    OR?: InputMaybe<Array<Geojson_Checksum_NormalizedContributorQueryInput>>;
    name_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    organization_ne?: InputMaybe<Scalars['String']>;
    organization_gte?: InputMaybe<Scalars['String']>;
    address_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    homepage_lte?: InputMaybe<Scalars['String']>;
    address?: InputMaybe<Scalars['String']>;
    identifiers_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    identifiers_lte?: InputMaybe<Scalars['String']>;
    email_gte?: InputMaybe<Scalars['String']>;
    organization_gt?: InputMaybe<Scalars['String']>;
    hydroshare_user_id_ne?: InputMaybe<Scalars['String']>;
    phone_gte?: InputMaybe<Scalars['String']>;
    identifiers_ne?: InputMaybe<Scalars['String']>;
    name_ne?: InputMaybe<Scalars['String']>;
    email_lte?: InputMaybe<Scalars['String']>;
    name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    homepage_lt?: InputMaybe<Scalars['String']>;
    name?: InputMaybe<Scalars['String']>;
    email_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    name_gt?: InputMaybe<Scalars['String']>;
    name_lt?: InputMaybe<Scalars['String']>;
    organization_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    phone?: InputMaybe<Scalars['String']>;
    address_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    homepage_ne?: InputMaybe<Scalars['String']>;
    address_lte?: InputMaybe<Scalars['String']>;
    homepage_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    name_gte?: InputMaybe<Scalars['String']>;
    organization_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    identifiers_gte?: InputMaybe<Scalars['String']>;
    name_lte?: InputMaybe<Scalars['String']>;
    phone_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    address_ne?: InputMaybe<Scalars['String']>;
    identifiers_gt?: InputMaybe<Scalars['String']>;
};

export type Geojson_Checksum_Normalized_MpmetadatumQueryInput = {
    modelReleaseDate_lt?: InputMaybe<Scalars['String']>;
    modelSoftware_ne?: InputMaybe<Scalars['String']>;
    modelCodeRepository?: InputMaybe<Scalars['String']>;
    modelCodeRepository_ne?: InputMaybe<Scalars['String']>;
    modelVersion?: InputMaybe<Scalars['String']>;
    modelSoftware_exists?: InputMaybe<Scalars['Boolean']>;
    modelCodeRepository_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    modelEngine_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    modelOperatingSystem_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    modelOperatingSystem_exists?: InputMaybe<Scalars['Boolean']>;
    modelCodeRepository_gt?: InputMaybe<Scalars['String']>;
    modelWebsite_lte?: InputMaybe<Scalars['String']>;
    modelEngine?: InputMaybe<Scalars['String']>;
    modelEngine_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    modelProgramLanguage_lte?: InputMaybe<Scalars['String']>;
    modelProgramLanguage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    modelReleaseDate_gte?: InputMaybe<Scalars['String']>;
    modelDocumentation_lt?: InputMaybe<Scalars['String']>;
    modelEngine_gt?: InputMaybe<Scalars['String']>;
    modelReleaseNotes_gt?: InputMaybe<Scalars['String']>;
    modelReleaseNotes_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    modelReleaseDate_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    modelEngine_lt?: InputMaybe<Scalars['String']>;
    modelDocumentation_gte?: InputMaybe<Scalars['String']>;
    modelReleaseNotes_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    modelDocumentation_exists?: InputMaybe<Scalars['Boolean']>;
    modelCodeRepository_exists?: InputMaybe<Scalars['Boolean']>;
    modelVersion_exists?: InputMaybe<Scalars['Boolean']>;
    modelOperatingSystem_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    modelReleaseNotes_ne?: InputMaybe<Scalars['String']>;
    modelDocumentation_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    modelWebsite?: InputMaybe<Scalars['String']>;
    modelEngine_ne?: InputMaybe<Scalars['String']>;
    modelCodeRepository_lte?: InputMaybe<Scalars['String']>;
    modelEngine_gte?: InputMaybe<Scalars['String']>;
    modelWebsite_gt?: InputMaybe<Scalars['String']>;
    modelDocumentation_gt?: InputMaybe<Scalars['String']>;
    modelProgramLanguage_gte?: InputMaybe<Scalars['String']>;
    modelSoftware?: InputMaybe<Scalars['String']>;
    modelEngine_lte?: InputMaybe<Scalars['String']>;
    modelReleaseDate_ne?: InputMaybe<Scalars['String']>;
    modelVersion_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    modelVersion_lte?: InputMaybe<Scalars['String']>;
    modelReleaseNotes_lt?: InputMaybe<Scalars['String']>;
    modelVersion_gt?: InputMaybe<Scalars['String']>;
    modelProgramLanguage_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    modelProgramLanguage_lt?: InputMaybe<Scalars['String']>;
    modelProgramLanguage_ne?: InputMaybe<Scalars['String']>;
    modelVersion_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    modelProgramLanguage?: InputMaybe<Scalars['String']>;
    modelDocumentation?: InputMaybe<Scalars['String']>;
    modelOperatingSystem_lt?: InputMaybe<Scalars['String']>;
    modelProgramLanguage_exists?: InputMaybe<Scalars['Boolean']>;
    modelDocumentation_ne?: InputMaybe<Scalars['String']>;
    modelWebsite_ne?: InputMaybe<Scalars['String']>;
    modelWebsite_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    modelReleaseDate_lte?: InputMaybe<Scalars['String']>;
    modelSoftware_lte?: InputMaybe<Scalars['String']>;
    modelWebsite_lt?: InputMaybe<Scalars['String']>;
    modelSoftware_gte?: InputMaybe<Scalars['String']>;
    modelReleaseNotes_exists?: InputMaybe<Scalars['Boolean']>;
    modelReleaseNotes_gte?: InputMaybe<Scalars['String']>;
    modelDocumentation_lte?: InputMaybe<Scalars['String']>;
    modelVersion_gte?: InputMaybe<Scalars['String']>;
    modelOperatingSystem?: InputMaybe<Scalars['String']>;
    OR?: InputMaybe<Array<Geojson_Checksum_Normalized_MpmetadatumQueryInput>>;
    modelDocumentation_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    modelReleaseDate_exists?: InputMaybe<Scalars['Boolean']>;
    modelSoftware_gt?: InputMaybe<Scalars['String']>;
    modelEngine_exists?: InputMaybe<Scalars['Boolean']>;
    modelCodeRepository_lt?: InputMaybe<Scalars['String']>;
    modelProgramLanguage_gt?: InputMaybe<Scalars['String']>;
    modelWebsite_exists?: InputMaybe<Scalars['Boolean']>;
    modelWebsite_gte?: InputMaybe<Scalars['String']>;
    modelSoftware_lt?: InputMaybe<Scalars['String']>;
    modelCodeRepository_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    modelOperatingSystem_gte?: InputMaybe<Scalars['String']>;
    AND?: InputMaybe<Array<Geojson_Checksum_Normalized_MpmetadatumQueryInput>>;
    modelReleaseDate?: InputMaybe<Scalars['String']>;
    modelReleaseNotes?: InputMaybe<Scalars['String']>;
    modelSoftware_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    modelReleaseDate_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    modelVersion_ne?: InputMaybe<Scalars['String']>;
    modelReleaseDate_gt?: InputMaybe<Scalars['String']>;
    modelCodeRepository_gte?: InputMaybe<Scalars['String']>;
    modelSoftware_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    modelOperatingSystem_lte?: InputMaybe<Scalars['String']>;
    modelOperatingSystem_ne?: InputMaybe<Scalars['String']>;
    modelReleaseNotes_lte?: InputMaybe<Scalars['String']>;
    modelVersion_lt?: InputMaybe<Scalars['String']>;
    modelOperatingSystem_gt?: InputMaybe<Scalars['String']>;
    modelWebsite_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Geojson_Checksum_Normalized_Model_ObjectiveInsertInput = {
    other_objectives?: InputMaybe<Scalars['String']>;
};

export type Geojson_Checksum_Normalized_Simulation_TypeUpdateInput = {
    simulation_type_name?: InputMaybe<Scalars['String']>;
    simulation_type_name_unset?: InputMaybe<Scalars['Boolean']>;
};

export type Geojson_Checksum_NormalizedRelationUpdateInput = {
    type_unset?: InputMaybe<Scalars['Boolean']>;
    value?: InputMaybe<Scalars['String']>;
    value_unset?: InputMaybe<Scalars['Boolean']>;
    type?: InputMaybe<Scalars['String']>;
};

export type Geojson_Checksum_NormalizedPublisherUpdateInput = {
    publisherName?: InputMaybe<Scalars['String']>;
    publisherName_unset?: InputMaybe<Scalars['Boolean']>;
    publisherURL?: InputMaybe<Scalars['String']>;
    publisherURL_unset?: InputMaybe<Scalars['Boolean']>;
};

export type Geojson_Checksum_Normalized_Cell_InformationInsertInput = {
    name?: InputMaybe<Scalars['String']>;
    rows?: InputMaybe<Scalars['String']>;
    cellDataType?: InputMaybe<Scalars['String']>;
    cellSizeXValue?: InputMaybe<Scalars['String']>;
    cellSizeYValue?: InputMaybe<Scalars['String']>;
    columns?: InputMaybe<Scalars['String']>;
};

export type Geojson_Checksum_NormalizedSpatial_CoverageGeometryUpdateInput = {
    type_unset?: InputMaybe<Scalars['Boolean']>;
    type?: InputMaybe<Scalars['String']>;
};

export type Geojson_Checksum_NormalizedPublisher = {
    __typename?: 'Geojson_checksum_normalizedPublisher';
    publisherName?: Maybe<Scalars['String']>;
    publisherURL?: Maybe<Scalars['String']>;
};

export type Geojson_Checksum_Normalized_Site = {
    __typename?: 'Geojson_checksum_normalized_site';
    ElevationDatum?: Maybe<Scalars['String']>;
    Elevation_m?: Maybe<Scalars['String']>;
    Latitude?: Maybe<Scalars['String']>;
    Longitude?: Maybe<Scalars['String']>;
    SiteCode?: Maybe<Scalars['String']>;
    SiteName?: Maybe<Scalars['String']>;
    SiteType?: Maybe<Scalars['String']>;
    timeSeriesResultUUID?: Maybe<Scalars['String']>;
};

export type Geojson_Checksum_Normalized_VariableInsertInput = {
    timeSeriesResultUUID?: InputMaybe<Scalars['String']>;
    NoDataValue?: InputMaybe<Scalars['String']>;
    Speciation?: InputMaybe<Scalars['String']>;
    VariableCode?: InputMaybe<Scalars['String']>;
    VariableName?: InputMaybe<Scalars['String']>;
    VariableType?: InputMaybe<Scalars['String']>;
};

export type Geojson_Checksum_Normalized_Model_OutputUpdateInput = {
    includes_output_unset?: InputMaybe<Scalars['Boolean']>;
    includes_output?: InputMaybe<Scalars['String']>;
};

export type Geojson_Checksum_Normalized_Stress_Period = {
    __typename?: 'Geojson_checksum_normalized_stress_period';
    stressPeriodType?: Maybe<Scalars['String']>;
};

export type Geojson_Checksum_NormalizedSpatial_CoverageGeometryQueryInput = {
    type_gt?: InputMaybe<Scalars['String']>;
    type_lt?: InputMaybe<Scalars['String']>;
    type_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    type_lte?: InputMaybe<Scalars['String']>;
    type_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    type?: InputMaybe<Scalars['String']>;
    type_exists?: InputMaybe<Scalars['Boolean']>;
    type_ne?: InputMaybe<Scalars['String']>;
    type_gte?: InputMaybe<Scalars['String']>;
    AND?: InputMaybe<Array<Geojson_Checksum_NormalizedSpatial_CoverageGeometryQueryInput>>;
    OR?: InputMaybe<Array<Geojson_Checksum_NormalizedSpatial_CoverageGeometryQueryInput>>;
};

export type Geojson_Checksum_NormalizedFieldinformation = {
    __typename?: 'Geojson_checksum_normalizedFieldinformation';
    fieldName?: Maybe<Scalars['String']>;
    fieldPrecision?: Maybe<Scalars['String']>;
    fieldType?: Maybe<Scalars['String']>;
    fieldTypeCode?: Maybe<Scalars['String']>;
    fieldWidth?: Maybe<Scalars['String']>;
};

export type Geojson_Checksum_NormalizedContributor = {
    __typename?: 'Geojson_checksum_normalizedContributor';
    address?: Maybe<Scalars['String']>;
    email?: Maybe<Scalars['String']>;
    homepage?: Maybe<Scalars['String']>;
    hydroshare_user_id?: Maybe<Scalars['String']>;
    identifiers?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    organization?: Maybe<Scalars['String']>;
    phone?: Maybe<Scalars['String']>;
};

export enum Geojson_Checksum_NormalizedSortByInput {
    TypeAsc = 'TYPE_ASC',
    AbstractAsc = 'ABSTRACT_ASC',
    CreatedDesc = 'CREATED_DESC',
    TitleDesc = 'TITLE_DESC',
    PublishedDesc = 'PUBLISHED_DESC',
    TypeDesc = 'TYPE_DESC',
    CreatedAsc = 'CREATED_ASC',
    IdDesc = 'ID_DESC',
    PublishedAsc = 'PUBLISHED_ASC',
    LanguageAsc = 'LANGUAGE_ASC',
    LanguageDesc = 'LANGUAGE_DESC',
    IdAsc = 'ID_ASC',
    ModifiedAsc = 'MODIFIED_ASC',
    ModifiedDesc = 'MODIFIED_DESC',
    TitleAsc = 'TITLE_ASC',
    _IdAsc = '_ID_ASC',
    _IdDesc = '_ID_DESC',
    AbstractDesc = 'ABSTRACT_DESC'
}

export type Geojson_Checksum_NormalizedRelationInsertInput = {
    type?: InputMaybe<Scalars['String']>;
    value?: InputMaybe<Scalars['String']>;
};

export type Geojson_Checksum_NormalizedIdentifier = {
    __typename?: 'Geojson_checksum_normalizedIdentifier';
    name?: Maybe<Scalars['String']>;
    url?: Maybe<Scalars['String']>;
};

export type Geojson_Checksum_Normalized_Ori_CoverageQueryInput = {
    _value_gt?: InputMaybe<Scalars['String']>;
    _value_lt?: InputMaybe<Scalars['String']>;
    _value?: InputMaybe<Scalars['String']>;
    _value_lte?: InputMaybe<Scalars['String']>;
    _value_ne?: InputMaybe<Scalars['String']>;
    AND?: InputMaybe<Array<Geojson_Checksum_Normalized_Ori_CoverageQueryInput>>;
    OR?: InputMaybe<Array<Geojson_Checksum_Normalized_Ori_CoverageQueryInput>>;
    _value_gte?: InputMaybe<Scalars['String']>;
    _value_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    _value_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    _value_exists?: InputMaybe<Scalars['Boolean']>;
};

export type Geojson_Checksum_Normalized_Url_BaseQueryInput = {
    value_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    value_lte?: InputMaybe<Scalars['String']>;
    value_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    AND?: InputMaybe<Array<Geojson_Checksum_Normalized_Url_BaseQueryInput>>;
    value_exists?: InputMaybe<Scalars['Boolean']>;
    value_gt?: InputMaybe<Scalars['String']>;
    value_gte?: InputMaybe<Scalars['String']>;
    value_lt?: InputMaybe<Scalars['String']>;
    value_ne?: InputMaybe<Scalars['String']>;
    OR?: InputMaybe<Array<Geojson_Checksum_Normalized_Url_BaseQueryInput>>;
    value?: InputMaybe<Scalars['String']>;
};

export type Geojson_Checksum_Normalized_SiteUpdateInput = {
    Longitude?: InputMaybe<Scalars['String']>;
    ElevationDatum_unset?: InputMaybe<Scalars['Boolean']>;
    timeSeriesResultUUID_unset?: InputMaybe<Scalars['Boolean']>;
    timeSeriesResultUUID?: InputMaybe<Scalars['String']>;
    SiteType_unset?: InputMaybe<Scalars['Boolean']>;
    Elevation_m_unset?: InputMaybe<Scalars['Boolean']>;
    Longitude_unset?: InputMaybe<Scalars['Boolean']>;
    SiteCode?: InputMaybe<Scalars['String']>;
    Latitude_unset?: InputMaybe<Scalars['Boolean']>;
    SiteName?: InputMaybe<Scalars['String']>;
    ElevationDatum?: InputMaybe<Scalars['String']>;
    Elevation_m?: InputMaybe<Scalars['String']>;
    Latitude?: InputMaybe<Scalars['String']>;
    SiteName_unset?: InputMaybe<Scalars['Boolean']>;
    SiteType?: InputMaybe<Scalars['String']>;
    SiteCode_unset?: InputMaybe<Scalars['Boolean']>;
};

export type Geojson_Checksum_Normalized_Cell_InformationUpdateInput = {
    columns?: InputMaybe<Scalars['String']>;
    rows_unset?: InputMaybe<Scalars['Boolean']>;
    cellDataType?: InputMaybe<Scalars['String']>;
    columns_unset?: InputMaybe<Scalars['Boolean']>;
    name?: InputMaybe<Scalars['String']>;
    cellSizeXValue_unset?: InputMaybe<Scalars['Boolean']>;
    cellSizeXValue?: InputMaybe<Scalars['String']>;
    cellSizeYValue_unset?: InputMaybe<Scalars['Boolean']>;
    rows?: InputMaybe<Scalars['String']>;
    cellSizeYValue?: InputMaybe<Scalars['String']>;
    name_unset?: InputMaybe<Scalars['Boolean']>;
    cellDataType_unset?: InputMaybe<Scalars['Boolean']>;
};

export type Geojson_Checksum_Normalized = {
    __typename?: 'Geojson_checksum_normalized';
    _band_information?: Maybe<Geojson_Checksum_Normalized_Band_Information>;
    _cell_information?: Maybe<Geojson_Checksum_Normalized_Cell_Information>;
    _executed_by?: Maybe<Geojson_Checksum_Normalized_Executed_By>;
    _grid_dimensions?: Maybe<Geojson_Checksum_Normalized_Grid_Dimension>;
    _homepage_url?: Maybe<Geojson_Checksum_Normalized_Homepage_Url>;
    _id?: Maybe<Scalars['ObjectId']>;
    _methods?: Maybe<Geojson_Checksum_Normalized_Method>;
    _model_input?: Maybe<Geojson_Checksum_Normalized_Model_Input>;
    _model_objective?: Maybe<Geojson_Checksum_Normalized_Model_Objective>;
    _model_output?: Maybe<Geojson_Checksum_Normalized_Model_Output>;
    _mpmetadata?: Maybe<Geojson_Checksum_Normalized_Mpmetadatum>;
    _ori_coverage?: Maybe<Geojson_Checksum_Normalized_Ori_Coverage>;
    _processing_levels?: Maybe<Geojson_Checksum_Normalized_Processing_Level>;
    _simulation_type?: Maybe<Geojson_Checksum_Normalized_Simulation_Type>;
    _sites?: Maybe<Geojson_Checksum_Normalized_Site>;
    _source_code_url?: Maybe<Geojson_Checksum_Normalized_Source_Code_Url>;
    _stress_period?: Maybe<Geojson_Checksum_Normalized_Stress_Period>;
    _supported_file_extensions?: Maybe<Geojson_Checksum_Normalized_Supported_File_Extension>;
    _time_series_results?: Maybe<Geojson_Checksum_Normalized_Time_Series_Result>;
    _tool_icon?: Maybe<Geojson_Checksum_Normalized_Tool_Icon>;
    _url_base?: Maybe<Geojson_Checksum_Normalized_Url_Base>;
    _url_base_file?: Maybe<Geojson_Checksum_Normalized_Url_Base_File>;
    _variables?: Maybe<Geojson_Checksum_Normalized_Variable>;
    _version?: Maybe<Geojson_Checksum_Normalized_Version>;
    abstract?: Maybe<Scalars['String']>;
    contributors?: Maybe<Array<Maybe<Geojson_Checksum_NormalizedContributor>>>;
    created?: Maybe<Scalars['String']>;
    creators?: Maybe<Array<Maybe<Geojson_Checksum_NormalizedCreator>>>;
    fieldinformations?: Maybe<Array<Maybe<Geojson_Checksum_NormalizedFieldinformation>>>;
    files?: Maybe<Array<Maybe<Geojson_Checksum_NormalizedFile>>>;
    funding_agencies?: Maybe<Array<Maybe<Geojson_Checksum_NormalizedFunding_Agency>>>;
    geometryinformations?: Maybe<Array<Maybe<Geojson_Checksum_NormalizedGeometryinformation>>>;
    id?: Maybe<Scalars['String']>;
    identifiers?: Maybe<Array<Maybe<Geojson_Checksum_NormalizedIdentifier>>>;
    language?: Maybe<Scalars['String']>;
    modified?: Maybe<Scalars['String']>;
    ori_coverage?: Maybe<Array<Maybe<Geojson_Checksum_NormalizedOri_Coverage>>>;
    originalcoverages?: Maybe<Array<Maybe<Geojson_Checksum_NormalizedOriginalcoverage>>>;
    period_coverage?: Maybe<Geojson_Checksum_NormalizedPeriod_Coverage>;
    published?: Maybe<Scalars['String']>;
    publisher?: Maybe<Geojson_Checksum_NormalizedPublisher>;
    relations?: Maybe<Array<Maybe<Geojson_Checksum_NormalizedRelation>>>;
    rights?: Maybe<Geojson_Checksum_NormalizedRight>;
    spatial_coverage?: Maybe<Geojson_Checksum_NormalizedSpatial_Coverage>;
    subjects?: Maybe<Array<Maybe<Scalars['String']>>>;
    title?: Maybe<Scalars['String']>;
    type?: Maybe<Scalars['String']>;
    variables?: Maybe<Array<Maybe<Geojson_Checksum_NormalizedVariable>>>;
};

export type Geojson_Checksum_Normalized_Executed_By = {
    __typename?: 'Geojson_checksum_normalized_executed_by';
    model_name?: Maybe<Scalars['String']>;
    model_program_fk?: Maybe<Scalars['String']>;
};

export type Geojson_Checksum_NormalizedQueryInput = {
    created_ne?: InputMaybe<Scalars['String']>;
    language?: InputMaybe<Scalars['String']>;
    funding_agencies_in?: InputMaybe<Array<InputMaybe<Geojson_Checksum_NormalizedFunding_AgencyQueryInput>>>;
    published_lte?: InputMaybe<Scalars['String']>;
    title_lte?: InputMaybe<Scalars['String']>;
    _band_information?: InputMaybe<Geojson_Checksum_Normalized_Band_InformationQueryInput>;
    abstract_gte?: InputMaybe<Scalars['String']>;
    language_gte?: InputMaybe<Scalars['String']>;
    published_ne?: InputMaybe<Scalars['String']>;
    published_gte?: InputMaybe<Scalars['String']>;
    _id?: InputMaybe<Scalars['ObjectId']>;
    published_lt?: InputMaybe<Scalars['String']>;
    period_coverage_exists?: InputMaybe<Scalars['Boolean']>;
    variables_in?: InputMaybe<Array<InputMaybe<Geojson_Checksum_NormalizedVariableQueryInput>>>;
    language_gt?: InputMaybe<Scalars['String']>;
    _model_output?: InputMaybe<Geojson_Checksum_Normalized_Model_OutputQueryInput>;
    subjects_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    _grid_dimensions_exists?: InputMaybe<Scalars['Boolean']>;
    fieldinformations_exists?: InputMaybe<Scalars['Boolean']>;
    _id_ne?: InputMaybe<Scalars['ObjectId']>;
    _model_objective?: InputMaybe<Geojson_Checksum_Normalized_Model_ObjectiveQueryInput>;
    published_exists?: InputMaybe<Scalars['Boolean']>;
    type_gte?: InputMaybe<Scalars['String']>;
    relations_nin?: InputMaybe<Array<InputMaybe<Geojson_Checksum_NormalizedRelationQueryInput>>>;
    _model_input?: InputMaybe<Geojson_Checksum_Normalized_Model_InputQueryInput>;
    geometryinformations_exists?: InputMaybe<Scalars['Boolean']>;
    _sites_exists?: InputMaybe<Scalars['Boolean']>;
    _variables_exists?: InputMaybe<Scalars['Boolean']>;
    title_gt?: InputMaybe<Scalars['String']>;
    type?: InputMaybe<Scalars['String']>;
    created_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    ori_coverage?: InputMaybe<Array<InputMaybe<Geojson_Checksum_NormalizedOri_CoverageQueryInput>>>;
    modified_lt?: InputMaybe<Scalars['String']>;
    _mpmetadata?: InputMaybe<Geojson_Checksum_Normalized_MpmetadatumQueryInput>;
    _url_base_file_exists?: InputMaybe<Scalars['Boolean']>;
    _cell_information?: InputMaybe<Geojson_Checksum_Normalized_Cell_InformationQueryInput>;
    rights?: InputMaybe<Geojson_Checksum_NormalizedRightQueryInput>;
    id_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    id_ne?: InputMaybe<Scalars['String']>;
    _mpmetadata_exists?: InputMaybe<Scalars['Boolean']>;
    id_gt?: InputMaybe<Scalars['String']>;
    language_lt?: InputMaybe<Scalars['String']>;
    creators?: InputMaybe<Array<InputMaybe<Geojson_Checksum_NormalizedCreatorQueryInput>>>;
    abstract_lt?: InputMaybe<Scalars['String']>;
    title_ne?: InputMaybe<Scalars['String']>;
    _ori_coverage_exists?: InputMaybe<Scalars['Boolean']>;
    _id_nin?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
    subjects?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    id_exists?: InputMaybe<Scalars['Boolean']>;
    created_gte?: InputMaybe<Scalars['String']>;
    funding_agencies_exists?: InputMaybe<Scalars['Boolean']>;
    id_gte?: InputMaybe<Scalars['String']>;
    created_gt?: InputMaybe<Scalars['String']>;
    modified_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    identifiers?: InputMaybe<Array<InputMaybe<Geojson_Checksum_NormalizedIdentifierQueryInput>>>;
    geometryinformations?: InputMaybe<Array<InputMaybe<Geojson_Checksum_NormalizedGeometryinformationQueryInput>>>;
    spatial_coverage?: InputMaybe<Geojson_Checksum_NormalizedSpatial_CoverageQueryInput>;
    _id_lte?: InputMaybe<Scalars['ObjectId']>;
    published?: InputMaybe<Scalars['String']>;
    ori_coverage_nin?: InputMaybe<Array<InputMaybe<Geojson_Checksum_NormalizedOri_CoverageQueryInput>>>;
    _stress_period?: InputMaybe<Geojson_Checksum_Normalized_Stress_PeriodQueryInput>;
    relations_exists?: InputMaybe<Scalars['Boolean']>;
    creators_in?: InputMaybe<Array<InputMaybe<Geojson_Checksum_NormalizedCreatorQueryInput>>>;
    _executed_by_exists?: InputMaybe<Scalars['Boolean']>;
    created_lte?: InputMaybe<Scalars['String']>;
    _id_gte?: InputMaybe<Scalars['ObjectId']>;
    language_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    _id_in?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
    id_lt?: InputMaybe<Scalars['String']>;
    _time_series_results_exists?: InputMaybe<Scalars['Boolean']>;
    OR?: InputMaybe<Array<Geojson_Checksum_NormalizedQueryInput>>;
    _ori_coverage?: InputMaybe<Geojson_Checksum_Normalized_Ori_CoverageQueryInput>;
    modified_exists?: InputMaybe<Scalars['Boolean']>;
    variables?: InputMaybe<Array<InputMaybe<Geojson_Checksum_NormalizedVariableQueryInput>>>;
    type_gt?: InputMaybe<Scalars['String']>;
    title_lt?: InputMaybe<Scalars['String']>;
    id?: InputMaybe<Scalars['String']>;
    _source_code_url?: InputMaybe<Geojson_Checksum_Normalized_Source_Code_UrlQueryInput>;
    contributors_in?: InputMaybe<Array<InputMaybe<Geojson_Checksum_NormalizedContributorQueryInput>>>;
    ori_coverage_exists?: InputMaybe<Scalars['Boolean']>;
    _url_base_file?: InputMaybe<Geojson_Checksum_Normalized_Url_Base_FileQueryInput>;
    _methods_exists?: InputMaybe<Scalars['Boolean']>;
    _supported_file_extensions?: InputMaybe<Geojson_Checksum_Normalized_Supported_File_ExtensionQueryInput>;
    modified_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    _simulation_type_exists?: InputMaybe<Scalars['Boolean']>;
    type_ne?: InputMaybe<Scalars['String']>;
    created_lt?: InputMaybe<Scalars['String']>;
    originalcoverages?: InputMaybe<Array<InputMaybe<Geojson_Checksum_NormalizedOriginalcoverageQueryInput>>>;
    _methods?: InputMaybe<Geojson_Checksum_Normalized_MethodQueryInput>;
    contributors_exists?: InputMaybe<Scalars['Boolean']>;
    _band_information_exists?: InputMaybe<Scalars['Boolean']>;
    _time_series_results?: InputMaybe<Geojson_Checksum_Normalized_Time_Series_ResultQueryInput>;
    language_ne?: InputMaybe<Scalars['String']>;
    modified_gte?: InputMaybe<Scalars['String']>;
    files?: InputMaybe<Array<InputMaybe<Geojson_Checksum_NormalizedFileQueryInput>>>;
    fieldinformations?: InputMaybe<Array<InputMaybe<Geojson_Checksum_NormalizedFieldinformationQueryInput>>>;
    abstract_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    published_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    title_gte?: InputMaybe<Scalars['String']>;
    modified?: InputMaybe<Scalars['String']>;
    relations_in?: InputMaybe<Array<InputMaybe<Geojson_Checksum_NormalizedRelationQueryInput>>>;
    modified_lte?: InputMaybe<Scalars['String']>;
    _url_base_exists?: InputMaybe<Scalars['Boolean']>;
    period_coverage?: InputMaybe<Geojson_Checksum_NormalizedPeriod_CoverageQueryInput>;
    _homepage_url_exists?: InputMaybe<Scalars['Boolean']>;
    modified_ne?: InputMaybe<Scalars['String']>;
    _source_code_url_exists?: InputMaybe<Scalars['Boolean']>;
    relations?: InputMaybe<Array<InputMaybe<Geojson_Checksum_NormalizedRelationQueryInput>>>;
    created_exists?: InputMaybe<Scalars['Boolean']>;
    language_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    abstract_ne?: InputMaybe<Scalars['String']>;
    contributors_nin?: InputMaybe<Array<InputMaybe<Geojson_Checksum_NormalizedContributorQueryInput>>>;
    publisher_exists?: InputMaybe<Scalars['Boolean']>;
    _tool_icon?: InputMaybe<Geojson_Checksum_Normalized_Tool_IconQueryInput>;
    _cell_information_exists?: InputMaybe<Scalars['Boolean']>;
    abstract_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    published_gt?: InputMaybe<Scalars['String']>;
    spatial_coverage_exists?: InputMaybe<Scalars['Boolean']>;
    type_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    funding_agencies_nin?: InputMaybe<Array<InputMaybe<Geojson_Checksum_NormalizedFunding_AgencyQueryInput>>>;
    id_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    modified_gt?: InputMaybe<Scalars['String']>;
    _id_lt?: InputMaybe<Scalars['ObjectId']>;
    _processing_levels?: InputMaybe<Geojson_Checksum_Normalized_Processing_LevelQueryInput>;
    originalcoverages_exists?: InputMaybe<Scalars['Boolean']>;
    variables_exists?: InputMaybe<Scalars['Boolean']>;
    creators_nin?: InputMaybe<Array<InputMaybe<Geojson_Checksum_NormalizedCreatorQueryInput>>>;
    subjects_exists?: InputMaybe<Scalars['Boolean']>;
    id_lte?: InputMaybe<Scalars['String']>;
    title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    created_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    _model_output_exists?: InputMaybe<Scalars['Boolean']>;
    _id_exists?: InputMaybe<Scalars['Boolean']>;
    _model_objective_exists?: InputMaybe<Scalars['Boolean']>;
    identifiers_in?: InputMaybe<Array<InputMaybe<Geojson_Checksum_NormalizedIdentifierQueryInput>>>;
    publisher?: InputMaybe<Geojson_Checksum_NormalizedPublisherQueryInput>;
    language_exists?: InputMaybe<Scalars['Boolean']>;
    _simulation_type?: InputMaybe<Geojson_Checksum_Normalized_Simulation_TypeQueryInput>;
    type_lte?: InputMaybe<Scalars['String']>;
    type_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    geometryinformations_nin?: InputMaybe<Array<InputMaybe<Geojson_Checksum_NormalizedGeometryinformationQueryInput>>>;
    _processing_levels_exists?: InputMaybe<Scalars['Boolean']>;
    variables_nin?: InputMaybe<Array<InputMaybe<Geojson_Checksum_NormalizedVariableQueryInput>>>;
    language_lte?: InputMaybe<Scalars['String']>;
    files_nin?: InputMaybe<Array<InputMaybe<Geojson_Checksum_NormalizedFileQueryInput>>>;
    fieldinformations_in?: InputMaybe<Array<InputMaybe<Geojson_Checksum_NormalizedFieldinformationQueryInput>>>;
    rights_exists?: InputMaybe<Scalars['Boolean']>;
    _homepage_url?: InputMaybe<Geojson_Checksum_Normalized_Homepage_UrlQueryInput>;
    identifiers_nin?: InputMaybe<Array<InputMaybe<Geojson_Checksum_NormalizedIdentifierQueryInput>>>;
    _id_gt?: InputMaybe<Scalars['ObjectId']>;
    type_exists?: InputMaybe<Scalars['Boolean']>;
    identifiers_exists?: InputMaybe<Scalars['Boolean']>;
    abstract_gt?: InputMaybe<Scalars['String']>;
    fieldinformations_nin?: InputMaybe<Array<InputMaybe<Geojson_Checksum_NormalizedFieldinformationQueryInput>>>;
    _stress_period_exists?: InputMaybe<Scalars['Boolean']>;
    _version?: InputMaybe<Geojson_Checksum_Normalized_VersionQueryInput>;
    _grid_dimensions?: InputMaybe<Geojson_Checksum_Normalized_Grid_DimensionQueryInput>;
    subjects_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    geometryinformations_in?: InputMaybe<Array<InputMaybe<Geojson_Checksum_NormalizedGeometryinformationQueryInput>>>;
    _model_input_exists?: InputMaybe<Scalars['Boolean']>;
    title?: InputMaybe<Scalars['String']>;
    title_exists?: InputMaybe<Scalars['Boolean']>;
    abstract_exists?: InputMaybe<Scalars['Boolean']>;
    originalcoverages_nin?: InputMaybe<Array<InputMaybe<Geojson_Checksum_NormalizedOriginalcoverageQueryInput>>>;
    creators_exists?: InputMaybe<Scalars['Boolean']>;
    title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    _variables?: InputMaybe<Geojson_Checksum_Normalized_VariableQueryInput>;
    created?: InputMaybe<Scalars['String']>;
    ori_coverage_in?: InputMaybe<Array<InputMaybe<Geojson_Checksum_NormalizedOri_CoverageQueryInput>>>;
    published_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    _version_exists?: InputMaybe<Scalars['Boolean']>;
    _url_base?: InputMaybe<Geojson_Checksum_Normalized_Url_BaseQueryInput>;
    _executed_by?: InputMaybe<Geojson_Checksum_Normalized_Executed_ByQueryInput>;
    abstract?: InputMaybe<Scalars['String']>;
    _supported_file_extensions_exists?: InputMaybe<Scalars['Boolean']>;
    type_lt?: InputMaybe<Scalars['String']>;
    files_in?: InputMaybe<Array<InputMaybe<Geojson_Checksum_NormalizedFileQueryInput>>>;
    _tool_icon_exists?: InputMaybe<Scalars['Boolean']>;
    funding_agencies?: InputMaybe<Array<InputMaybe<Geojson_Checksum_NormalizedFunding_AgencyQueryInput>>>;
    contributors?: InputMaybe<Array<InputMaybe<Geojson_Checksum_NormalizedContributorQueryInput>>>;
    files_exists?: InputMaybe<Scalars['Boolean']>;
    AND?: InputMaybe<Array<Geojson_Checksum_NormalizedQueryInput>>;
    abstract_lte?: InputMaybe<Scalars['String']>;
    _sites?: InputMaybe<Geojson_Checksum_Normalized_SiteQueryInput>;
    originalcoverages_in?: InputMaybe<Array<InputMaybe<Geojson_Checksum_NormalizedOriginalcoverageQueryInput>>>;
};

export type Geojson_Checksum_Normalized_MethodQueryInput = {
    MethodCode_lte?: InputMaybe<Scalars['String']>;
    MethodType_lte?: InputMaybe<Scalars['String']>;
    MethodType_gte?: InputMaybe<Scalars['String']>;
    timeSeriesResultUUID_gt?: InputMaybe<Scalars['String']>;
    MethodType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    MethodDescription_lt?: InputMaybe<Scalars['String']>;
    MethodType?: InputMaybe<Scalars['String']>;
    timeSeriesResultUUID_exists?: InputMaybe<Scalars['Boolean']>;
    MethodDescription_gte?: InputMaybe<Scalars['String']>;
    MethodDescription_lte?: InputMaybe<Scalars['String']>;
    MethodDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    MethodName_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    MethodCode_gt?: InputMaybe<Scalars['String']>;
    MethodDescription?: InputMaybe<Scalars['String']>;
    MethodDescription_ne?: InputMaybe<Scalars['String']>;
    MethodCode_lt?: InputMaybe<Scalars['String']>;
    timeSeriesResultUUID_gte?: InputMaybe<Scalars['String']>;
    timeSeriesResultUUID_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    MethodName_exists?: InputMaybe<Scalars['Boolean']>;
    MethodDescription_exists?: InputMaybe<Scalars['Boolean']>;
    MethodType_lt?: InputMaybe<Scalars['String']>;
    timeSeriesResultUUID_lte?: InputMaybe<Scalars['String']>;
    MethodName_gte?: InputMaybe<Scalars['String']>;
    MethodName_ne?: InputMaybe<Scalars['String']>;
    AND?: InputMaybe<Array<Geojson_Checksum_Normalized_MethodQueryInput>>;
    MethodName_lt?: InputMaybe<Scalars['String']>;
    OR?: InputMaybe<Array<Geojson_Checksum_Normalized_MethodQueryInput>>;
    MethodDescription_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    timeSeriesResultUUID?: InputMaybe<Scalars['String']>;
    MethodName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    MethodDescription_gt?: InputMaybe<Scalars['String']>;
    MethodCode_exists?: InputMaybe<Scalars['Boolean']>;
    timeSeriesResultUUID_lt?: InputMaybe<Scalars['String']>;
    MethodType_exists?: InputMaybe<Scalars['Boolean']>;
    timeSeriesResultUUID_ne?: InputMaybe<Scalars['String']>;
    MethodCode_gte?: InputMaybe<Scalars['String']>;
    MethodCode_ne?: InputMaybe<Scalars['String']>;
    MethodName_gt?: InputMaybe<Scalars['String']>;
    MethodType_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    MethodCode?: InputMaybe<Scalars['String']>;
    MethodCode_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    MethodName?: InputMaybe<Scalars['String']>;
    MethodCode_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    MethodName_lte?: InputMaybe<Scalars['String']>;
    MethodType_ne?: InputMaybe<Scalars['String']>;
    MethodType_gt?: InputMaybe<Scalars['String']>;
    timeSeriesResultUUID_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Geojson_Checksum_Normalized_Grid_DimensionInsertInput = {
    numberOfColumns?: InputMaybe<Scalars['String']>;
    numberOfLayers?: InputMaybe<Scalars['String']>;
    numberOfRows?: InputMaybe<Scalars['String']>;
};

export type Geojson_Checksum_Normalized_Processing_LevelInsertInput = {
    timeSeriesResultUUID?: InputMaybe<Scalars['String']>;
    Definition?: InputMaybe<Scalars['String']>;
    Explanation?: InputMaybe<Scalars['String']>;
    ProcessingLevelCode?: InputMaybe<Scalars['String']>;
};

export type Geojson_Checksum_NormalizedGeometryinformationUpdateInput = {
    geometryType?: InputMaybe<Scalars['String']>;
    geometryType_unset?: InputMaybe<Scalars['Boolean']>;
    featureCount?: InputMaybe<Scalars['String']>;
    featureCount_unset?: InputMaybe<Scalars['Boolean']>;
};

export type Geojson_Checksum_Normalized_Model_InputQueryInput = {
    rainfallTimeStepType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    simulationTimeStepValue_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    warmupPeriodValue_exists?: InputMaybe<Scalars['Boolean']>;
    simulationTimeStepType_gt?: InputMaybe<Scalars['String']>;
    routingTimeStepValue_gt?: InputMaybe<Scalars['String']>;
    rainfallTimeStepValue_ne?: InputMaybe<Scalars['String']>;
    rainfallTimeStepType_lt?: InputMaybe<Scalars['String']>;
    demResolution_lte?: InputMaybe<Scalars['String']>;
    warmupPeriodValue_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    demSourceURL_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    numberOfSubbasins_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    soilDataSourceName_exists?: InputMaybe<Scalars['Boolean']>;
    warmupPeriodValue?: InputMaybe<Scalars['String']>;
    warmupPeriodValue_gte?: InputMaybe<Scalars['String']>;
    demSourceURL_exists?: InputMaybe<Scalars['Boolean']>;
    watershedArea_ne?: InputMaybe<Scalars['String']>;
    numberOfHRUs_lte?: InputMaybe<Scalars['String']>;
    numberOfSubbasins_lt?: InputMaybe<Scalars['String']>;
    landUseDataSourceName_lte?: InputMaybe<Scalars['String']>;
    soilDataSourceURL_lte?: InputMaybe<Scalars['String']>;
    numberOfSubbasins_exists?: InputMaybe<Scalars['Boolean']>;
    landUseDataSourceURL_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    numberOfHRUs_exists?: InputMaybe<Scalars['Boolean']>;
    rainfallTimeStepType_exists?: InputMaybe<Scalars['Boolean']>;
    soilDataSourceName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    OR?: InputMaybe<Array<Geojson_Checksum_Normalized_Model_InputQueryInput>>;
    numberOfHRUs_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    routingTimeStepValue_lt?: InputMaybe<Scalars['String']>;
    soilDataSourceURL_lt?: InputMaybe<Scalars['String']>;
    demSourceName_lt?: InputMaybe<Scalars['String']>;
    landUseDataSourceURL?: InputMaybe<Scalars['String']>;
    demResolution_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    routingTimeStepType_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    numberOfHRUs?: InputMaybe<Scalars['String']>;
    demResolution_gt?: InputMaybe<Scalars['String']>;
    soilDataSourceURL_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    demResolution_lt?: InputMaybe<Scalars['String']>;
    routingTimeStepType_lte?: InputMaybe<Scalars['String']>;
    simulationTimeStepType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    warmupPeriodValue_gt?: InputMaybe<Scalars['String']>;
    demSourceURL_lt?: InputMaybe<Scalars['String']>;
    soilDataSourceName_lt?: InputMaybe<Scalars['String']>;
    routingTimeStepValue_exists?: InputMaybe<Scalars['Boolean']>;
    soilDataSourceURL_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    landUseDataSourceURL_lt?: InputMaybe<Scalars['String']>;
    demSourceURL_lte?: InputMaybe<Scalars['String']>;
    AND?: InputMaybe<Array<Geojson_Checksum_Normalized_Model_InputQueryInput>>;
    rainfallTimeStepValue_lt?: InputMaybe<Scalars['String']>;
    numberOfSubbasins_ne?: InputMaybe<Scalars['String']>;
    simulationTimeStepValue?: InputMaybe<Scalars['String']>;
    landUseDataSourceName_gte?: InputMaybe<Scalars['String']>;
    numberOfSubbasins_gte?: InputMaybe<Scalars['String']>;
    soilDataSourceURL_gte?: InputMaybe<Scalars['String']>;
    warmupPeriodValue_ne?: InputMaybe<Scalars['String']>;
    soilDataSourceName_ne?: InputMaybe<Scalars['String']>;
    watershedArea_lt?: InputMaybe<Scalars['String']>;
    routingTimeStepValue_gte?: InputMaybe<Scalars['String']>;
    simulationTimeStepType_lte?: InputMaybe<Scalars['String']>;
    routingTimeStepType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    simulationTimeStepType_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    numberOfSubbasins_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    warmupPeriodValue_lte?: InputMaybe<Scalars['String']>;
    rainfallTimeStepValue_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    landUseDataSourceName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    numberOfSubbasins?: InputMaybe<Scalars['String']>;
    landUseDataSourceName_gt?: InputMaybe<Scalars['String']>;
    routingTimeStepValue_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    demResolution_ne?: InputMaybe<Scalars['String']>;
    rainfallTimeStepValue_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    rainfallTimeStepValue_gte?: InputMaybe<Scalars['String']>;
    watershedArea_gt?: InputMaybe<Scalars['String']>;
    demResolution_gte?: InputMaybe<Scalars['String']>;
    rainfallTimeStepValue_lte?: InputMaybe<Scalars['String']>;
    watershedArea?: InputMaybe<Scalars['String']>;
    routingTimeStepValue_ne?: InputMaybe<Scalars['String']>;
    soilDataSourceURL_ne?: InputMaybe<Scalars['String']>;
    landUseDataSourceName_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    simulationTimeStepType_lt?: InputMaybe<Scalars['String']>;
    soilDataSourceURL_exists?: InputMaybe<Scalars['Boolean']>;
    rainfallTimeStepValue_exists?: InputMaybe<Scalars['Boolean']>;
    demSourceURL_gt?: InputMaybe<Scalars['String']>;
    routingTimeStepType_exists?: InputMaybe<Scalars['Boolean']>;
    simulationTimeStepValue_lt?: InputMaybe<Scalars['String']>;
    rainfallTimeStepType_lte?: InputMaybe<Scalars['String']>;
    landUseDataSourceName_exists?: InputMaybe<Scalars['Boolean']>;
    demSourceName_gt?: InputMaybe<Scalars['String']>;
    demSourceName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    simulationTimeStepType_gte?: InputMaybe<Scalars['String']>;
    numberOfHRUs_gt?: InputMaybe<Scalars['String']>;
    routingTimeStepType?: InputMaybe<Scalars['String']>;
    rainfallTimeStepValue_gt?: InputMaybe<Scalars['String']>;
    landUseDataSourceName?: InputMaybe<Scalars['String']>;
    numberOfHRUs_ne?: InputMaybe<Scalars['String']>;
    rainfallTimeStepType?: InputMaybe<Scalars['String']>;
    demSourceName_ne?: InputMaybe<Scalars['String']>;
    simulationTimeStepValue_gt?: InputMaybe<Scalars['String']>;
    simulationTimeStepType_ne?: InputMaybe<Scalars['String']>;
    demSourceName_exists?: InputMaybe<Scalars['Boolean']>;
    soilDataSourceName_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    simulationTimeStepType?: InputMaybe<Scalars['String']>;
    simulationTimeStepValue_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    landUseDataSourceURL_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    watershedArea_gte?: InputMaybe<Scalars['String']>;
    simulationTimeStepValue_exists?: InputMaybe<Scalars['Boolean']>;
    soilDataSourceName?: InputMaybe<Scalars['String']>;
    routingTimeStepValue_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    routingTimeStepType_gte?: InputMaybe<Scalars['String']>;
    watershedArea_exists?: InputMaybe<Scalars['Boolean']>;
    rainfallTimeStepType_ne?: InputMaybe<Scalars['String']>;
    simulationTimeStepValue_lte?: InputMaybe<Scalars['String']>;
    soilDataSourceName_lte?: InputMaybe<Scalars['String']>;
    demResolution_exists?: InputMaybe<Scalars['Boolean']>;
    landUseDataSourceName_ne?: InputMaybe<Scalars['String']>;
    demSourceURL_gte?: InputMaybe<Scalars['String']>;
    landUseDataSourceURL_gte?: InputMaybe<Scalars['String']>;
    numberOfHRUs_gte?: InputMaybe<Scalars['String']>;
    simulationTimeStepType_exists?: InputMaybe<Scalars['Boolean']>;
    routingTimeStepValue_lte?: InputMaybe<Scalars['String']>;
    demSourceName?: InputMaybe<Scalars['String']>;
    numberOfSubbasins_lte?: InputMaybe<Scalars['String']>;
    watershedArea_lte?: InputMaybe<Scalars['String']>;
    numberOfSubbasins_gt?: InputMaybe<Scalars['String']>;
    simulationTimeStepValue_ne?: InputMaybe<Scalars['String']>;
    demSourceName_gte?: InputMaybe<Scalars['String']>;
    demResolution?: InputMaybe<Scalars['String']>;
    soilDataSourceName_gte?: InputMaybe<Scalars['String']>;
    demSourceURL_ne?: InputMaybe<Scalars['String']>;
    numberOfHRUs_lt?: InputMaybe<Scalars['String']>;
    watershedArea_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    demSourceURL?: InputMaybe<Scalars['String']>;
    landUseDataSourceName_lt?: InputMaybe<Scalars['String']>;
    rainfallTimeStepType_gt?: InputMaybe<Scalars['String']>;
    landUseDataSourceURL_ne?: InputMaybe<Scalars['String']>;
    routingTimeStepType_gt?: InputMaybe<Scalars['String']>;
    landUseDataSourceURL_exists?: InputMaybe<Scalars['Boolean']>;
    routingTimeStepType_ne?: InputMaybe<Scalars['String']>;
    soilDataSourceURL?: InputMaybe<Scalars['String']>;
    demSourceName_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    rainfallTimeStepValue?: InputMaybe<Scalars['String']>;
    soilDataSourceURL_gt?: InputMaybe<Scalars['String']>;
    landUseDataSourceURL_gt?: InputMaybe<Scalars['String']>;
    watershedArea_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    routingTimeStepValue?: InputMaybe<Scalars['String']>;
    rainfallTimeStepType_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    routingTimeStepType_lt?: InputMaybe<Scalars['String']>;
    soilDataSourceName_gt?: InputMaybe<Scalars['String']>;
    landUseDataSourceURL_lte?: InputMaybe<Scalars['String']>;
    rainfallTimeStepType_gte?: InputMaybe<Scalars['String']>;
    demSourceURL_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    demResolution_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    numberOfHRUs_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    warmupPeriodValue_lt?: InputMaybe<Scalars['String']>;
    simulationTimeStepValue_gte?: InputMaybe<Scalars['String']>;
    warmupPeriodValue_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    demSourceName_lte?: InputMaybe<Scalars['String']>;
};

export type Geojson_Checksum_Normalized_VersionQueryInput = {
    value_gte?: InputMaybe<Scalars['String']>;
    value_lt?: InputMaybe<Scalars['String']>;
    value_exists?: InputMaybe<Scalars['Boolean']>;
    value_gt?: InputMaybe<Scalars['String']>;
    value_lte?: InputMaybe<Scalars['String']>;
    value_ne?: InputMaybe<Scalars['String']>;
    value_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    AND?: InputMaybe<Array<Geojson_Checksum_Normalized_VersionQueryInput>>;
    OR?: InputMaybe<Array<Geojson_Checksum_Normalized_VersionQueryInput>>;
    value?: InputMaybe<Scalars['String']>;
    value_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Geojson_Checksum_Normalized_VariableQueryInput = {
    Speciation_gt?: InputMaybe<Scalars['String']>;
    VariableName_exists?: InputMaybe<Scalars['Boolean']>;
    timeSeriesResultUUID_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    Speciation?: InputMaybe<Scalars['String']>;
    Speciation_ne?: InputMaybe<Scalars['String']>;
    Speciation_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    VariableType?: InputMaybe<Scalars['String']>;
    NoDataValue_gt?: InputMaybe<Scalars['String']>;
    VariableCode_gte?: InputMaybe<Scalars['String']>;
    NoDataValue_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    Speciation_exists?: InputMaybe<Scalars['Boolean']>;
    Speciation_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    timeSeriesResultUUID_ne?: InputMaybe<Scalars['String']>;
    VariableCode_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    timeSeriesResultUUID_lte?: InputMaybe<Scalars['String']>;
    timeSeriesResultUUID_lt?: InputMaybe<Scalars['String']>;
    Speciation_lt?: InputMaybe<Scalars['String']>;
    VariableName_lt?: InputMaybe<Scalars['String']>;
    VariableCode?: InputMaybe<Scalars['String']>;
    VariableCode_lt?: InputMaybe<Scalars['String']>;
    timeSeriesResultUUID_gt?: InputMaybe<Scalars['String']>;
    VariableType_lt?: InputMaybe<Scalars['String']>;
    VariableType_ne?: InputMaybe<Scalars['String']>;
    AND?: InputMaybe<Array<Geojson_Checksum_Normalized_VariableQueryInput>>;
    NoDataValue_exists?: InputMaybe<Scalars['Boolean']>;
    VariableType_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    VariableName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    timeSeriesResultUUID_exists?: InputMaybe<Scalars['Boolean']>;
    timeSeriesResultUUID?: InputMaybe<Scalars['String']>;
    VariableType_gte?: InputMaybe<Scalars['String']>;
    VariableName_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    NoDataValue_ne?: InputMaybe<Scalars['String']>;
    NoDataValue_lte?: InputMaybe<Scalars['String']>;
    VariableType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    VariableCode_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    Speciation_gte?: InputMaybe<Scalars['String']>;
    VariableCode_exists?: InputMaybe<Scalars['Boolean']>;
    OR?: InputMaybe<Array<Geojson_Checksum_Normalized_VariableQueryInput>>;
    NoDataValue?: InputMaybe<Scalars['String']>;
    VariableCode_gt?: InputMaybe<Scalars['String']>;
    VariableType_exists?: InputMaybe<Scalars['Boolean']>;
    VariableName?: InputMaybe<Scalars['String']>;
    VariableType_gt?: InputMaybe<Scalars['String']>;
    NoDataValue_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    NoDataValue_lt?: InputMaybe<Scalars['String']>;
    VariableName_ne?: InputMaybe<Scalars['String']>;
    NoDataValue_gte?: InputMaybe<Scalars['String']>;
    VariableName_gt?: InputMaybe<Scalars['String']>;
    VariableType_lte?: InputMaybe<Scalars['String']>;
    VariableCode_ne?: InputMaybe<Scalars['String']>;
    VariableName_gte?: InputMaybe<Scalars['String']>;
    timeSeriesResultUUID_gte?: InputMaybe<Scalars['String']>;
    Speciation_lte?: InputMaybe<Scalars['String']>;
    timeSeriesResultUUID_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    VariableCode_lte?: InputMaybe<Scalars['String']>;
    VariableName_lte?: InputMaybe<Scalars['String']>;
};

export type Geojson_Checksum_Normalized_Executed_ByInsertInput = {
    model_name?: InputMaybe<Scalars['String']>;
    model_program_fk?: InputMaybe<Scalars['String']>;
};

export type Geojson_Checksum_Normalized_Supported_File_ExtensionInsertInput = {
    value?: InputMaybe<Scalars['String']>;
};

export type Geojson_Checksum_Normalized_MethodUpdateInput = {
    timeSeriesResultUUID?: InputMaybe<Scalars['String']>;
    timeSeriesResultUUID_unset?: InputMaybe<Scalars['Boolean']>;
    MethodDescription_unset?: InputMaybe<Scalars['Boolean']>;
    MethodName_unset?: InputMaybe<Scalars['Boolean']>;
    MethodType?: InputMaybe<Scalars['String']>;
    MethodCode_unset?: InputMaybe<Scalars['Boolean']>;
    MethodDescription?: InputMaybe<Scalars['String']>;
    MethodName?: InputMaybe<Scalars['String']>;
    MethodType_unset?: InputMaybe<Scalars['Boolean']>;
    MethodCode?: InputMaybe<Scalars['String']>;
};

export type Geojson_Checksum_Normalized_Band_InformationQueryInput = {
    method_lt?: InputMaybe<Scalars['String']>;
    comment_lte?: InputMaybe<Scalars['String']>;
    OR?: InputMaybe<Array<Geojson_Checksum_Normalized_Band_InformationQueryInput>>;
    variableName_ne?: InputMaybe<Scalars['String']>;
    comment_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    variableUnit_lt?: InputMaybe<Scalars['String']>;
    variableName_lte?: InputMaybe<Scalars['String']>;
    method_gte?: InputMaybe<Scalars['String']>;
    comment_exists?: InputMaybe<Scalars['Boolean']>;
    comment?: InputMaybe<Scalars['String']>;
    minimumValue_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    maximumValue_gte?: InputMaybe<Scalars['String']>;
    method_gt?: InputMaybe<Scalars['String']>;
    variableUnit_gte?: InputMaybe<Scalars['String']>;
    variableName?: InputMaybe<Scalars['String']>;
    variableUnit_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    comment_gte?: InputMaybe<Scalars['String']>;
    noDataValue_ne?: InputMaybe<Scalars['String']>;
    name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    variableName_gt?: InputMaybe<Scalars['String']>;
    variableName_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    minimumValue_lte?: InputMaybe<Scalars['String']>;
    method_ne?: InputMaybe<Scalars['String']>;
    noDataValue?: InputMaybe<Scalars['String']>;
    method_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    name_exists?: InputMaybe<Scalars['Boolean']>;
    maximumValue_lte?: InputMaybe<Scalars['String']>;
    noDataValue_gte?: InputMaybe<Scalars['String']>;
    method?: InputMaybe<Scalars['String']>;
    variableUnit_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    AND?: InputMaybe<Array<Geojson_Checksum_Normalized_Band_InformationQueryInput>>;
    maximumValue_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    method_exists?: InputMaybe<Scalars['Boolean']>;
    name_gte?: InputMaybe<Scalars['String']>;
    comment_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    maximumValue?: InputMaybe<Scalars['String']>;
    variableUnit_ne?: InputMaybe<Scalars['String']>;
    minimumValue_exists?: InputMaybe<Scalars['Boolean']>;
    minimumValue_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    comment_gt?: InputMaybe<Scalars['String']>;
    maximumValue_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    method_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    minimumValue_ne?: InputMaybe<Scalars['String']>;
    name_lte?: InputMaybe<Scalars['String']>;
    variableUnit_lte?: InputMaybe<Scalars['String']>;
    comment_ne?: InputMaybe<Scalars['String']>;
    variableUnit?: InputMaybe<Scalars['String']>;
    name?: InputMaybe<Scalars['String']>;
    variableName_gte?: InputMaybe<Scalars['String']>;
    minimumValue?: InputMaybe<Scalars['String']>;
    maximumValue_gt?: InputMaybe<Scalars['String']>;
    variableName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    variableUnit_exists?: InputMaybe<Scalars['Boolean']>;
    method_lte?: InputMaybe<Scalars['String']>;
    minimumValue_gt?: InputMaybe<Scalars['String']>;
    comment_lt?: InputMaybe<Scalars['String']>;
    minimumValue_gte?: InputMaybe<Scalars['String']>;
    name_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    noDataValue_exists?: InputMaybe<Scalars['Boolean']>;
    name_ne?: InputMaybe<Scalars['String']>;
    noDataValue_lt?: InputMaybe<Scalars['String']>;
    maximumValue_lt?: InputMaybe<Scalars['String']>;
    variableName_exists?: InputMaybe<Scalars['Boolean']>;
    minimumValue_lt?: InputMaybe<Scalars['String']>;
    maximumValue_exists?: InputMaybe<Scalars['Boolean']>;
    noDataValue_gt?: InputMaybe<Scalars['String']>;
    variableName_lt?: InputMaybe<Scalars['String']>;
    noDataValue_lte?: InputMaybe<Scalars['String']>;
    name_gt?: InputMaybe<Scalars['String']>;
    noDataValue_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    noDataValue_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    maximumValue_ne?: InputMaybe<Scalars['String']>;
    name_lt?: InputMaybe<Scalars['String']>;
    variableUnit_gt?: InputMaybe<Scalars['String']>;
};

export type Geojson_Checksum_NormalizedSpatial_CoverageGeometryInsertInput = {
    type?: InputMaybe<Scalars['String']>;
};

export type Geojson_Checksum_Normalized_SiteInsertInput = {
    Longitude?: InputMaybe<Scalars['String']>;
    SiteCode?: InputMaybe<Scalars['String']>;
    SiteName?: InputMaybe<Scalars['String']>;
    SiteType?: InputMaybe<Scalars['String']>;
    timeSeriesResultUUID?: InputMaybe<Scalars['String']>;
    ElevationDatum?: InputMaybe<Scalars['String']>;
    Elevation_m?: InputMaybe<Scalars['String']>;
    Latitude?: InputMaybe<Scalars['String']>;
};

export type Geojson_Checksum_Normalized_Url_BaseInsertInput = {
    value?: InputMaybe<Scalars['String']>;
};

export type Geojson_Checksum_Normalized_Mpmetadatum = {
    __typename?: 'Geojson_checksum_normalized_mpmetadatum';
    modelCodeRepository?: Maybe<Scalars['String']>;
    modelDocumentation?: Maybe<Scalars['String']>;
    modelEngine?: Maybe<Scalars['String']>;
    modelOperatingSystem?: Maybe<Scalars['String']>;
    modelProgramLanguage?: Maybe<Scalars['String']>;
    modelReleaseDate?: Maybe<Scalars['String']>;
    modelReleaseNotes?: Maybe<Scalars['String']>;
    modelSoftware?: Maybe<Scalars['String']>;
    modelVersion?: Maybe<Scalars['String']>;
    modelWebsite?: Maybe<Scalars['String']>;
};

export type Geojson_Checksum_Normalized_Band_Information = {
    __typename?: 'Geojson_checksum_normalized_band_information';
    comment?: Maybe<Scalars['String']>;
    maximumValue?: Maybe<Scalars['String']>;
    method?: Maybe<Scalars['String']>;
    minimumValue?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    noDataValue?: Maybe<Scalars['String']>;
    variableName?: Maybe<Scalars['String']>;
    variableUnit?: Maybe<Scalars['String']>;
};

export type Geojson_Checksum_NormalizedOri_CoverageInsertInput = {
    projection_string_text?: InputMaybe<Scalars['String']>;
    projection_string_type?: InputMaybe<Scalars['String']>;
    _value?: InputMaybe<Scalars['String']>;
    datum?: InputMaybe<Scalars['String']>;
};

export type Geojson_Checksum_Normalized_Source_Code_UrlInsertInput = {
    value?: InputMaybe<Scalars['String']>;
};

export type Geojson_Checksum_Normalized_Homepage_UrlInsertInput = {
    value?: InputMaybe<Scalars['String']>;
};

export type Geojson_Checksum_NormalizedOri_Coverage = {
    __typename?: 'Geojson_checksum_normalizedOri_coverage';
    _value?: Maybe<Scalars['String']>;
    datum?: Maybe<Scalars['String']>;
    projection_string_text?: Maybe<Scalars['String']>;
    projection_string_type?: Maybe<Scalars['String']>;
};

export type Geojson_Checksum_NormalizedOriginalcoverage = {
    __typename?: 'Geojson_checksum_normalizedOriginalcoverage';
    datum?: Maybe<Scalars['String']>;
    eastlimit?: Maybe<Scalars['String']>;
    northlimit?: Maybe<Scalars['String']>;
    projection_name?: Maybe<Scalars['String']>;
    projection_string?: Maybe<Scalars['String']>;
    southlimit?: Maybe<Scalars['String']>;
    unit?: Maybe<Scalars['String']>;
    westlimit?: Maybe<Scalars['String']>;
};

export type Geojson_Checksum_NormalizedPeriod_CoverageQueryInput = {
    start_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    end_exists?: InputMaybe<Scalars['Boolean']>;
    start_gte?: InputMaybe<Scalars['String']>;
    end_gt?: InputMaybe<Scalars['String']>;
    start_gt?: InputMaybe<Scalars['String']>;
    end_ne?: InputMaybe<Scalars['String']>;
    AND?: InputMaybe<Array<Geojson_Checksum_NormalizedPeriod_CoverageQueryInput>>;
    OR?: InputMaybe<Array<Geojson_Checksum_NormalizedPeriod_CoverageQueryInput>>;
    start_ne?: InputMaybe<Scalars['String']>;
    start_lt?: InputMaybe<Scalars['String']>;
    start_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    end_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    start_exists?: InputMaybe<Scalars['Boolean']>;
    end_lte?: InputMaybe<Scalars['String']>;
    start_lte?: InputMaybe<Scalars['String']>;
    end_lt?: InputMaybe<Scalars['String']>;
    start?: InputMaybe<Scalars['String']>;
    end?: InputMaybe<Scalars['String']>;
    end_gte?: InputMaybe<Scalars['String']>;
    end_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Geojson_Checksum_Normalized_Processing_LevelQueryInput = {
    timeSeriesResultUUID_ne?: InputMaybe<Scalars['String']>;
    ProcessingLevelCode_lte?: InputMaybe<Scalars['String']>;
    timeSeriesResultUUID_lt?: InputMaybe<Scalars['String']>;
    ProcessingLevelCode_exists?: InputMaybe<Scalars['Boolean']>;
    Definition_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    Definition_exists?: InputMaybe<Scalars['Boolean']>;
    Explanation_lte?: InputMaybe<Scalars['String']>;
    Definition?: InputMaybe<Scalars['String']>;
    ProcessingLevelCode?: InputMaybe<Scalars['String']>;
    Explanation_gte?: InputMaybe<Scalars['String']>;
    Explanation_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    Explanation_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    timeSeriesResultUUID_exists?: InputMaybe<Scalars['Boolean']>;
    Definition_gt?: InputMaybe<Scalars['String']>;
    Explanation_lt?: InputMaybe<Scalars['String']>;
    timeSeriesResultUUID_lte?: InputMaybe<Scalars['String']>;
    Explanation_gt?: InputMaybe<Scalars['String']>;
    ProcessingLevelCode_lt?: InputMaybe<Scalars['String']>;
    OR?: InputMaybe<Array<Geojson_Checksum_Normalized_Processing_LevelQueryInput>>;
    Definition_lt?: InputMaybe<Scalars['String']>;
    timeSeriesResultUUID?: InputMaybe<Scalars['String']>;
    Definition_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    Explanation?: InputMaybe<Scalars['String']>;
    timeSeriesResultUUID_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    timeSeriesResultUUID_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    ProcessingLevelCode_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    Definition_lte?: InputMaybe<Scalars['String']>;
    timeSeriesResultUUID_gte?: InputMaybe<Scalars['String']>;
    Explanation_ne?: InputMaybe<Scalars['String']>;
    timeSeriesResultUUID_gt?: InputMaybe<Scalars['String']>;
    ProcessingLevelCode_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    Definition_ne?: InputMaybe<Scalars['String']>;
    ProcessingLevelCode_gte?: InputMaybe<Scalars['String']>;
    ProcessingLevelCode_ne?: InputMaybe<Scalars['String']>;
    ProcessingLevelCode_gt?: InputMaybe<Scalars['String']>;
    AND?: InputMaybe<Array<Geojson_Checksum_Normalized_Processing_LevelQueryInput>>;
    Definition_gte?: InputMaybe<Scalars['String']>;
    Explanation_exists?: InputMaybe<Scalars['Boolean']>;
};

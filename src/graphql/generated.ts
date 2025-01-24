import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  Duration: { input: any; output: any; }
  JSON: { input: any; output: any; }
  URL: { input: any; output: any; }
};

/** Filter used to filter AbstractTypeChangedEvent */
export type AbstractTypeChangedEventFilterInput = {
  /** Connects all subformulas via and */
  and?: InputMaybe<Array<AbstractTypeChangedEventFilterInput>>;
  /** Filter by createdAt */
  createdAt?: InputMaybe<DateTimeFilterInput>;
  /** Filters for nodes where the related node match this filter */
  createdBy?: InputMaybe<UserFilterInput>;
  /** Filter by id */
  id?: InputMaybe<IdFilterInput>;
  /** Filter for nodes of type AssignmentTypeChangedEvent */
  isAssignmentTypeChangedEventAnd?: InputMaybe<AssignmentTypeChangedEventFilterInput>;
  /** Filter for nodes of type IncomingRelationTypeChangedEvent */
  isIncomingRelationTypeChangedEventAnd?: InputMaybe<IncomingRelationTypeChangedEventFilterInput>;
  /** Filter for nodes of type OutgoingRelationTypeChangedEvent */
  isOutgoingRelationTypeChangedEventAnd?: InputMaybe<OutgoingRelationTypeChangedEventFilterInput>;
  /** Filter for nodes of type RelationTypeChangedEvent */
  isRelationTypeChangedEventAnd?: InputMaybe<RelationTypeChangedEventFilterInput>;
  /** Filter for nodes of type TypeChangedEvent */
  isTypeChangedEventAnd?: InputMaybe<TypeChangedEventFilterInput>;
  /** Filters for nodes where the related node match this filter */
  issue?: InputMaybe<IssueFilterInput>;
  /** Filter by lastModifiedAt */
  lastModifiedAt?: InputMaybe<DateTimeFilterInput>;
  /** Filters for nodes where the related node match this filter */
  lastModifiedBy?: InputMaybe<UserFilterInput>;
  /** Negates the subformula */
  not?: InputMaybe<AbstractTypeChangedEventFilterInput>;
  /** Connects all subformulas via or */
  or?: InputMaybe<Array<AbstractTypeChangedEventFilterInput>>;
  /** Filters for nodes where the related node match this filter */
  parentItem?: InputMaybe<ParentTimelineItemFilterInput>;
  /** Filter for specific timeline items. Entries are joined by OR */
  timelineItemTypes?: InputMaybe<Array<TimelineItemType>>;
};

/** Input for the addAffectedEntityToIssue mutation */
export type AddAffectedEntityToIssueInput = {
  /** The id of the AffectedByIssue which is affected by the Issue */
  affectedEntity: Scalars['ID']['input'];
  /** The id of the Issue which affects the entity */
  issue: Scalars['ID']['input'];
};

/** Input for the addArtefactToIssue mutation */
export type AddArtefactToIssueInput = {
  /** The id of the Artefact to add */
  artefact: Scalars['ID']['input'];
  /** The id of the Issue where to add the Artefact */
  issue: Scalars['ID']['input'];
};

/** Input for the addComponentVersionToProject mutation */
export type AddComponentVersionToProjectInput = {
  /** The id of the ComponentVersion to add */
  componentVersion: Scalars['ID']['input'];
  /** The id of the Project where to add the ComponentVersion */
  project: Scalars['ID']['input'];
};

/** Input for the addInterfaceSpecificationVersionToComponentVersion mutation */
export type AddInterfaceSpecificationVersionToComponentVersionInput = {
  /** The id of the ComponentVersion to add the InterfaceSpecificationVersion to. */
  componentVersion: Scalars['ID']['input'];
  /** The id of the InterfaceSpecificationVersion to add. Must be part of the same Component as `componentVersion` */
  interfaceSpecificationVersion: Scalars['ID']['input'];
  /** If `true`, the InterfaceSpecificationVersion is added invisible */
  invisible: Scalars['Boolean']['input'];
  /** If `true`, the InterfaceSpecificationVersion is added visible */
  visible: Scalars['Boolean']['input'];
};

/** Input for the addIssueToPinnedIssues mutation */
export type AddIssueToPinnedIssuesInput = {
  /** The id of the Issue to pin */
  issue: Scalars['ID']['input'];
  /** The id of the Trackable where the Issue should be pinned */
  trackable: Scalars['ID']['input'];
};

/** Input for the addIssueToTrackable mutation */
export type AddIssueToTrackableInput = {
  /** The id of the Issue to add to the Trackable */
  issue: Scalars['ID']['input'];
  /** The id of the Trackable where to add the Issue */
  trackable: Scalars['ID']['input'];
};

/** Input for the addLabelToIssue mutation */
export type AddLabelToIssueInput = {
  /** The id of the Issue where to add the Label */
  issue: Scalars['ID']['input'];
  /** The id of the Label to add */
  label: Scalars['ID']['input'];
};

/** Input for the addLabelToTrackable mutation */
export type AddLabelToTrackableInput = {
  /** The id of the Label to add */
  label: Scalars['ID']['input'];
  /** The id of the Trackable where to add the Label */
  trackable: Scalars['ID']['input'];
};

/** Filter used to filter AddedAffectedEntityEvent */
export type AddedAffectedEntityEventFilterInput = {
  /** Filters for nodes where the related node match this filter */
  addedAffectedEntity?: InputMaybe<AffectedByIssueFilterInput>;
  /** Connects all subformulas via and */
  and?: InputMaybe<Array<AddedAffectedEntityEventFilterInput>>;
  /** Filter by createdAt */
  createdAt?: InputMaybe<DateTimeFilterInput>;
  /** Filters for nodes where the related node match this filter */
  createdBy?: InputMaybe<UserFilterInput>;
  /** Filter by id */
  id?: InputMaybe<IdFilterInput>;
  /** Filters for nodes where the related node match this filter */
  issue?: InputMaybe<IssueFilterInput>;
  /** Filter by lastModifiedAt */
  lastModifiedAt?: InputMaybe<DateTimeFilterInput>;
  /** Filters for nodes where the related node match this filter */
  lastModifiedBy?: InputMaybe<UserFilterInput>;
  /** Negates the subformula */
  not?: InputMaybe<AddedAffectedEntityEventFilterInput>;
  /** Connects all subformulas via or */
  or?: InputMaybe<Array<AddedAffectedEntityEventFilterInput>>;
  /** Filters for nodes where the related node match this filter */
  parentItem?: InputMaybe<ParentTimelineItemFilterInput>;
  /** Filter for specific timeline items. Entries are joined by OR */
  timelineItemTypes?: InputMaybe<Array<TimelineItemType>>;
};

/** Filter used to filter AddedArtefactEvent */
export type AddedArtefactEventFilterInput = {
  /** Filters for nodes where the related node match this filter */
  addedArtefact?: InputMaybe<ArtefactFilterInput>;
  /** Connects all subformulas via and */
  and?: InputMaybe<Array<AddedArtefactEventFilterInput>>;
  /** Filter by createdAt */
  createdAt?: InputMaybe<DateTimeFilterInput>;
  /** Filters for nodes where the related node match this filter */
  createdBy?: InputMaybe<UserFilterInput>;
  /** Filter by id */
  id?: InputMaybe<IdFilterInput>;
  /** Filters for nodes where the related node match this filter */
  issue?: InputMaybe<IssueFilterInput>;
  /** Filter by lastModifiedAt */
  lastModifiedAt?: InputMaybe<DateTimeFilterInput>;
  /** Filters for nodes where the related node match this filter */
  lastModifiedBy?: InputMaybe<UserFilterInput>;
  /** Negates the subformula */
  not?: InputMaybe<AddedArtefactEventFilterInput>;
  /** Connects all subformulas via or */
  or?: InputMaybe<Array<AddedArtefactEventFilterInput>>;
  /** Filters for nodes where the related node match this filter */
  parentItem?: InputMaybe<ParentTimelineItemFilterInput>;
  /** Filter for specific timeline items. Entries are joined by OR */
  timelineItemTypes?: InputMaybe<Array<TimelineItemType>>;
};

/** Filter used to filter AddedLabelEvent */
export type AddedLabelEventFilterInput = {
  /** Filters for nodes where the related node match this filter */
  addedLabel?: InputMaybe<LabelFilterInput>;
  /** Connects all subformulas via and */
  and?: InputMaybe<Array<AddedLabelEventFilterInput>>;
  /** Filter by createdAt */
  createdAt?: InputMaybe<DateTimeFilterInput>;
  /** Filters for nodes where the related node match this filter */
  createdBy?: InputMaybe<UserFilterInput>;
  /** Filter by id */
  id?: InputMaybe<IdFilterInput>;
  /** Filters for nodes where the related node match this filter */
  issue?: InputMaybe<IssueFilterInput>;
  /** Filter by lastModifiedAt */
  lastModifiedAt?: InputMaybe<DateTimeFilterInput>;
  /** Filters for nodes where the related node match this filter */
  lastModifiedBy?: InputMaybe<UserFilterInput>;
  /** Negates the subformula */
  not?: InputMaybe<AddedLabelEventFilterInput>;
  /** Connects all subformulas via or */
  or?: InputMaybe<Array<AddedLabelEventFilterInput>>;
  /** Filters for nodes where the related node match this filter */
  parentItem?: InputMaybe<ParentTimelineItemFilterInput>;
  /** Filter for specific timeline items. Entries are joined by OR */
  timelineItemTypes?: InputMaybe<Array<TimelineItemType>>;
};

/** Filter used to filter AddedToPinnedIssuesEvent */
export type AddedToPinnedIssuesEventFilterInput = {
  /** Connects all subformulas via and */
  and?: InputMaybe<Array<AddedToPinnedIssuesEventFilterInput>>;
  /** Filter by createdAt */
  createdAt?: InputMaybe<DateTimeFilterInput>;
  /** Filters for nodes where the related node match this filter */
  createdBy?: InputMaybe<UserFilterInput>;
  /** Filter by id */
  id?: InputMaybe<IdFilterInput>;
  /** Filters for nodes where the related node match this filter */
  issue?: InputMaybe<IssueFilterInput>;
  /** Filter by lastModifiedAt */
  lastModifiedAt?: InputMaybe<DateTimeFilterInput>;
  /** Filters for nodes where the related node match this filter */
  lastModifiedBy?: InputMaybe<UserFilterInput>;
  /** Negates the subformula */
  not?: InputMaybe<AddedToPinnedIssuesEventFilterInput>;
  /** Connects all subformulas via or */
  or?: InputMaybe<Array<AddedToPinnedIssuesEventFilterInput>>;
  /** Filters for nodes where the related node match this filter */
  parentItem?: InputMaybe<ParentTimelineItemFilterInput>;
  /** Filters for nodes where the related node match this filter */
  pinnedOn?: InputMaybe<TrackableFilterInput>;
  /** Filter for specific timeline items. Entries are joined by OR */
  timelineItemTypes?: InputMaybe<Array<TimelineItemType>>;
};

/** Filter used to filter AddedToTrackableEvent */
export type AddedToTrackableEventFilterInput = {
  /** Filters for nodes where the related node match this filter */
  addedToTrackable?: InputMaybe<TrackableFilterInput>;
  /** Connects all subformulas via and */
  and?: InputMaybe<Array<AddedToTrackableEventFilterInput>>;
  /** Filter by createdAt */
  createdAt?: InputMaybe<DateTimeFilterInput>;
  /** Filters for nodes where the related node match this filter */
  createdBy?: InputMaybe<UserFilterInput>;
  /** Filter by id */
  id?: InputMaybe<IdFilterInput>;
  /** Filters for nodes where the related node match this filter */
  issue?: InputMaybe<IssueFilterInput>;
  /** Filter by lastModifiedAt */
  lastModifiedAt?: InputMaybe<DateTimeFilterInput>;
  /** Filters for nodes where the related node match this filter */
  lastModifiedBy?: InputMaybe<UserFilterInput>;
  /** Negates the subformula */
  not?: InputMaybe<AddedToTrackableEventFilterInput>;
  /** Connects all subformulas via or */
  or?: InputMaybe<Array<AddedToTrackableEventFilterInput>>;
  /** Filters for nodes where the related node match this filter */
  parentItem?: InputMaybe<ParentTimelineItemFilterInput>;
  /** Filter for specific timeline items. Entries are joined by OR */
  timelineItemTypes?: InputMaybe<Array<TimelineItemType>>;
};

/** Filter used to filter AffectedByIssue */
export type AffectedByIssueFilterInput = {
  /** Filter by affectingIssues */
  affectingIssues?: InputMaybe<IssueListFilterInput>;
  /** Connects all subformulas via and */
  and?: InputMaybe<Array<AffectedByIssueFilterInput>>;
  /** Filter by id */
  id?: InputMaybe<IdFilterInput>;
  /** Filter for nodes of type Component */
  isComponentAnd?: InputMaybe<ComponentFilterInput>;
  /** Filter for nodes of type ComponentVersion */
  isComponentVersionAnd?: InputMaybe<ComponentVersionFilterInput>;
  /** Filter for nodes of type Interface */
  isInterfaceAnd?: InputMaybe<InterfaceFilterInput>;
  /** Filter for nodes of type InterfacePart */
  isInterfacePartAnd?: InputMaybe<InterfacePartFilterInput>;
  /** Filter for nodes of type InterfaceSpecification */
  isInterfaceSpecificationAnd?: InputMaybe<InterfaceSpecificationFilterInput>;
  /** Filter for nodes of type InterfaceSpecificationVersion */
  isInterfaceSpecificationVersionAnd?: InputMaybe<InterfaceSpecificationVersionFilterInput>;
  /** Filter for nodes of type NamedAffectedByIssue */
  isNamedAffectedByIssueAnd?: InputMaybe<NamedAffectedByIssueFilterInput>;
  /** Filter for nodes of type Project */
  isProjectAnd?: InputMaybe<ProjectFilterInput>;
  /** Filter for nodes of type RelationPartner */
  isRelationPartnerAnd?: InputMaybe<RelationPartnerFilterInput>;
  /** Filter for nodes of type Trackable */
  isTrackableAnd?: InputMaybe<TrackableFilterInput>;
  /** Negates the subformula */
  not?: InputMaybe<AffectedByIssueFilterInput>;
  /** Connects all subformulas via or */
  or?: InputMaybe<Array<AffectedByIssueFilterInput>>;
  /** Filters for AffectedByIssues which are related to a Trackable */
  relatedTo?: InputMaybe<Scalars['ID']['input']>;
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type AffectedByIssueListFilterInput = {
  /** Filters for nodes where all of the related nodes match this filter */
  all?: InputMaybe<AffectedByIssueFilterInput>;
  /** Filters for nodes where any of the related nodes match this filter */
  any?: InputMaybe<AffectedByIssueFilterInput>;
  /** Filters for nodes where none of the related nodes match this filter */
  none?: InputMaybe<AffectedByIssueFilterInput>;
};

/** Defines the order of a AffectedByIssue list */
export type AffectedByIssueOrder = {
  /** The direction to order by, defaults to ASC */
  direction?: InputMaybe<OrderDirection>;
  /** The field to order by, defaults to ID */
  field?: InputMaybe<AffectedByIssueOrderField>;
};

/** Fields a list of AffectedByIssue can be sorted by */
export enum AffectedByIssueOrderField {
  /** Order by id */
  Id = 'ID'
}

/** Filter used to filter AggregatedIssue */
export type AggregatedIssueFilterInput = {
  /** Connects all subformulas via and */
  and?: InputMaybe<Array<AggregatedIssueFilterInput>>;
  /** Filter by count */
  count?: InputMaybe<IntFilterInput>;
  /** Filter by id */
  id?: InputMaybe<IdFilterInput>;
  /** Filter by incomingRelations */
  incomingRelations?: InputMaybe<AggregatedIssueRelationListFilterInput>;
  /** Filter by isOpen */
  isOpen?: InputMaybe<BooleanFilterInput>;
  /** Filter by issues */
  issues?: InputMaybe<IssueListFilterInput>;
  /** Negates the subformula */
  not?: InputMaybe<AggregatedIssueFilterInput>;
  /** Connects all subformulas via or */
  or?: InputMaybe<Array<AggregatedIssueFilterInput>>;
  /** Filter by outgoingRelations */
  outgoingRelations?: InputMaybe<AggregatedIssueRelationListFilterInput>;
  /** Filters for nodes where the related node match this filter */
  relationPartner?: InputMaybe<RelationPartnerFilterInput>;
  /** Filters for nodes where the related node match this filter */
  type?: InputMaybe<IssueTypeFilterInput>;
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type AggregatedIssueListFilterInput = {
  /** Filters for nodes where all of the related nodes match this filter */
  all?: InputMaybe<AggregatedIssueFilterInput>;
  /** Filters for nodes where any of the related nodes match this filter */
  any?: InputMaybe<AggregatedIssueFilterInput>;
  /** Filters for nodes where none of the related nodes match this filter */
  none?: InputMaybe<AggregatedIssueFilterInput>;
};

/** Defines the order of a AggregatedIssue list */
export type AggregatedIssueOrder = {
  /** The direction to order by, defaults to ASC */
  direction?: InputMaybe<OrderDirection>;
  /** The field to order by, defaults to ID */
  field?: InputMaybe<AggregatedIssueOrderField>;
};

/** Fields a list of AggregatedIssue can be sorted by */
export enum AggregatedIssueOrderField {
  /** Order by count */
  Count = 'COUNT',
  /** Order by id */
  Id = 'ID'
}

/** Filter used to filter AggregatedIssueRelation */
export type AggregatedIssueRelationFilterInput = {
  /** Connects all subformulas via and */
  and?: InputMaybe<Array<AggregatedIssueRelationFilterInput>>;
  /** Filters for nodes where the related node match this filter */
  end?: InputMaybe<AggregatedIssueFilterInput>;
  /** Filter by id */
  id?: InputMaybe<IdFilterInput>;
  /** Filter by issueRelations */
  issueRelations?: InputMaybe<IssueRelationListFilterInput>;
  /** Negates the subformula */
  not?: InputMaybe<AggregatedIssueRelationFilterInput>;
  /** Connects all subformulas via or */
  or?: InputMaybe<Array<AggregatedIssueRelationFilterInput>>;
  /** Filters for nodes where the related node match this filter */
  start?: InputMaybe<AggregatedIssueFilterInput>;
  /** Filters for nodes where the related node match this filter */
  type?: InputMaybe<IssueRelationTypeFilterInput>;
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type AggregatedIssueRelationListFilterInput = {
  /** Filters for nodes where all of the related nodes match this filter */
  all?: InputMaybe<AggregatedIssueRelationFilterInput>;
  /** Filters for nodes where any of the related nodes match this filter */
  any?: InputMaybe<AggregatedIssueRelationFilterInput>;
  /** Filters for nodes where none of the related nodes match this filter */
  none?: InputMaybe<AggregatedIssueRelationFilterInput>;
};

/** Defines the order of a AggregatedIssueRelation list */
export type AggregatedIssueRelationOrder = {
  /** The direction to order by, defaults to ASC */
  direction?: InputMaybe<OrderDirection>;
  /** The field to order by, defaults to ID */
  field?: InputMaybe<AggregatedIssueRelationOrderField>;
};

/** Fields a list of AggregatedIssueRelation can be sorted by */
export enum AggregatedIssueRelationOrderField {
  /** Order by id */
  Id = 'ID'
}

/** Non global permission entries */
export enum AllPermissionEntry {
  /**
   * Allows to add the Component to Projects
   * Note: this should be handled very carefully, as adding a Component to a Project gives
   * all users with READ access to the Project READ access to the Component
   */
  AddToProjects = 'ADD_TO_PROJECTS',
  /** Grants all other permissions on the Node except READ. */
  Admin = 'ADMIN',
  /**
   * Allows affecting entities part of this Trackable with any Issues.
   * Affectable entitites include
   *   - the Trackable itself
   *   - in case the Trackable is a Component
   *     - InterfaceSpecifications, their InterfaceSpecificationVersions and their InterfaceParts of the Component (not inherited ones)
   *     - Interfaces on the Component
   *     - ComponentVersions of the Component
   */
  AffectEntitiesWithIssues = 'AFFECT_ENTITIES_WITH_ISSUES',
  /**
   * Allows to create Comments on Issues on this Trackable.
   * Also allows editing of your own Comments.
   */
  Comment = 'COMMENT',
  /**
   * Allows to create new Issues on the Trackable.
   * This includes adding Issues from other Trackables.
   */
  CreateIssues = 'CREATE_ISSUES',
  /** Allows adding Issues on this Trackable to other Trackables. */
  ExportIssues = 'EXPORT_ISSUES',
  /** Allows adding Labels on this Trackable to other Trackables. */
  ExportLabels = 'EXPORT_LABELS',
  /** Allows to add, remove, and update Artefacts on this Trackable. */
  ManageArtefacts = 'MANAGE_ARTEFACTS',
  /** Allows to add / remove ComponentVersions to / from this Project. */
  ManageComponents = 'MANAGE_COMPONENTS',
  /**
   * Allows to add, remove, and update IMSProjects on this Trackable.
   * Note: for adding, `IMSPermissionEntry.SYNC_TRACKABLES` is required additionally
   */
  ManageIms = 'MANAGE_IMS',
  /**
   * Allows to manage issues.
   * This includes `CREATE_ISSUES` and `COMMENT`.
   * This does NOT include `LINK_TO_ISSUES` and `LINK_FROM_ISSUES`.
   * Additionaly includes
   *   - change the Template
   *   - add / remove Labels
   *   - add / remove Artefacts
   *   - change any field on the Issue (title, startDate, dueDate, ...)
   *   - change templated fields
   * In contrast to `MODERATOR`, this does not allow editing / removing Comments of other users
   */
  ManageIssues = 'MANAGE_ISSUES',
  /**
   * Allows to add, remove, and update Labels on this Trackable.
   * Also allows to delete a Label, but only if it is allowed on all Trackable the Label is on.
   */
  ManageLabels = 'MANAGE_LABELS',
  /** Allows to manage the views of this Project. */
  ManageViews = 'MANAGE_VIEWS',
  /**
   * Allows to moderate Issues on this Trackable.
   * This allows everything `MANAGE_ISSUES` allows.
   * Additionally, it allows editing and deleting Comments of other Users
   */
  Moderator = 'MODERATOR',
  /**
   * Allows to read the Node (obtain it via the API) and to read certain related Nodes.
   * See documentation for specific Node for the specific conditions.
   */
  Read = 'READ',
  /**
   * Allows to create Relations with a version of this Component or an Interface of this Component
   * as start.
   * Note: as these Relations cannot cause new Interfaces on this Component, this can be granted
   * more permissively compared to `RELATE_TO_COMPONENT`.
   */
  RelateFromComponent = 'RELATE_FROM_COMPONENT',
  /** Allows to create IMSProjects with this IMS. */
  SyncTrackables = 'SYNC_TRACKABLES'
}

/** Filter used to filter Artefact */
export type ArtefactFilterInput = {
  /** Connects all subformulas via and */
  and?: InputMaybe<Array<ArtefactFilterInput>>;
  /** Filter by createdAt */
  createdAt?: InputMaybe<DateTimeFilterInput>;
  /** Filters for nodes where the related node match this filter */
  createdBy?: InputMaybe<UserFilterInput>;
  /** Filter by file */
  file?: InputMaybe<StringFilterInput>;
  /** Filter by from */
  from?: InputMaybe<NullableIntFilterInput>;
  /** Filter by id */
  id?: InputMaybe<IdFilterInput>;
  /** Filter by issues */
  issues?: InputMaybe<IssueListFilterInput>;
  /** Filter by lastModifiedAt */
  lastModifiedAt?: InputMaybe<DateTimeFilterInput>;
  /** Filters for nodes where the related node match this filter */
  lastModifiedBy?: InputMaybe<UserFilterInput>;
  /** Negates the subformula */
  not?: InputMaybe<ArtefactFilterInput>;
  /** Connects all subformulas via or */
  or?: InputMaybe<Array<ArtefactFilterInput>>;
  /** Filter by referencingComments */
  referencingComments?: InputMaybe<IssueCommentListFilterInput>;
  /** Filters for nodes where the related node match this filter */
  template?: InputMaybe<ArtefactTemplateFilterInput>;
  /** Filter for templated fields with matching key and values. Entries are joined by AND */
  templatedFields?: InputMaybe<Array<InputMaybe<JsonFieldInput>>>;
  /** Filter by to */
  to?: InputMaybe<NullableIntFilterInput>;
  /** Filters for nodes where the related node match this filter */
  trackable?: InputMaybe<TrackableFilterInput>;
  /** Filter by version */
  version?: InputMaybe<NullableStringFilterInput>;
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type ArtefactListFilterInput = {
  /** Filters for nodes where all of the related nodes match this filter */
  all?: InputMaybe<ArtefactFilterInput>;
  /** Filters for nodes where any of the related nodes match this filter */
  any?: InputMaybe<ArtefactFilterInput>;
  /** Filters for nodes where none of the related nodes match this filter */
  none?: InputMaybe<ArtefactFilterInput>;
};

/** Defines the order of a Artefact list */
export type ArtefactOrder = {
  /** The direction to order by, defaults to ASC */
  direction?: InputMaybe<OrderDirection>;
  /** The field to order by, defaults to ID */
  field?: InputMaybe<ArtefactOrderField>;
};

/** Fields a list of Artefact can be sorted by */
export enum ArtefactOrderField {
  /** Order by createdAt */
  CreatedAt = 'CREATED_AT',
  /** Order by file */
  File = 'FILE',
  /** Order by from */
  From = 'FROM',
  /** Order by id */
  Id = 'ID',
  /** Order by lastModifiedAt */
  LastModifiedAt = 'LAST_MODIFIED_AT',
  /** Order by to */
  To = 'TO',
  /** Order by version */
  Version = 'VERSION'
}

/** Filter used to filter ArtefactTemplate */
export type ArtefactTemplateFilterInput = {
  /** Connects all subformulas via and */
  and?: InputMaybe<Array<ArtefactTemplateFilterInput>>;
  /** Filter by description */
  description?: InputMaybe<StringFilterInput>;
  /** Filter by extendedBy */
  extendedBy?: InputMaybe<ArtefactTemplateListFilterInput>;
  /** Filter by extends */
  extends?: InputMaybe<ArtefactTemplateListFilterInput>;
  /** Filter by id */
  id?: InputMaybe<IdFilterInput>;
  /** Filter by isDeprecated */
  isDeprecated?: InputMaybe<BooleanFilterInput>;
  /** Filter by name */
  name?: InputMaybe<StringFilterInput>;
  /** Negates the subformula */
  not?: InputMaybe<ArtefactTemplateFilterInput>;
  /** Connects all subformulas via or */
  or?: InputMaybe<Array<ArtefactTemplateFilterInput>>;
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type ArtefactTemplateListFilterInput = {
  /** Filters for nodes where all of the related nodes match this filter */
  all?: InputMaybe<ArtefactTemplateFilterInput>;
  /** Filters for nodes where any of the related nodes match this filter */
  any?: InputMaybe<ArtefactTemplateFilterInput>;
  /** Filters for nodes where none of the related nodes match this filter */
  none?: InputMaybe<ArtefactTemplateFilterInput>;
};

/** Defines the order of a ArtefactTemplate list */
export type ArtefactTemplateOrder = {
  /** The direction to order by, defaults to ASC */
  direction?: InputMaybe<OrderDirection>;
  /** The field to order by, defaults to ID */
  field?: InputMaybe<ArtefactTemplateOrderField>;
};

/** Fields a list of ArtefactTemplate can be sorted by */
export enum ArtefactTemplateOrderField {
  /** Order by id */
  Id = 'ID',
  /** Order by name */
  Name = 'NAME'
}

/** Filter used to filter Assignment */
export type AssignmentFilterInput = {
  /** Connects all subformulas via and */
  and?: InputMaybe<Array<AssignmentFilterInput>>;
  /** Filter by createdAt */
  createdAt?: InputMaybe<DateTimeFilterInput>;
  /** Filters for nodes where the related node match this filter */
  createdBy?: InputMaybe<UserFilterInput>;
  /** Filter by id */
  id?: InputMaybe<IdFilterInput>;
  /** Filters for nodes where the related node match this filter */
  initialType?: InputMaybe<AssignmentTypeFilterInput>;
  /** Filters for nodes where the related node match this filter */
  issue?: InputMaybe<IssueFilterInput>;
  /** Filter by lastModifiedAt */
  lastModifiedAt?: InputMaybe<DateTimeFilterInput>;
  /** Filters for nodes where the related node match this filter */
  lastModifiedBy?: InputMaybe<UserFilterInput>;
  /** Negates the subformula */
  not?: InputMaybe<AssignmentFilterInput>;
  /** Connects all subformulas via or */
  or?: InputMaybe<Array<AssignmentFilterInput>>;
  /** Filters for nodes where the related node match this filter */
  parentItem?: InputMaybe<ParentTimelineItemFilterInput>;
  /** Filter for specific timeline items. Entries are joined by OR */
  timelineItemTypes?: InputMaybe<Array<TimelineItemType>>;
  /** Filters for nodes where the related node match this filter */
  type?: InputMaybe<AssignmentTypeFilterInput>;
  /** Filters for nodes where the related node match this filter */
  user?: InputMaybe<UserFilterInput>;
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type AssignmentListFilterInput = {
  /** Filters for nodes where all of the related nodes match this filter */
  all?: InputMaybe<AssignmentFilterInput>;
  /** Filters for nodes where any of the related nodes match this filter */
  any?: InputMaybe<AssignmentFilterInput>;
  /** Filters for nodes where none of the related nodes match this filter */
  none?: InputMaybe<AssignmentFilterInput>;
};

/** Defines the order of a Assignment list */
export type AssignmentOrder = {
  /** The direction to order by, defaults to ASC */
  direction?: InputMaybe<OrderDirection>;
  /** The field to order by, defaults to ID */
  field?: InputMaybe<AssignmentOrderField>;
};

/** Fields a list of Assignment can be sorted by */
export enum AssignmentOrderField {
  /** Order by createdAt */
  CreatedAt = 'CREATED_AT',
  /** Order by id */
  Id = 'ID',
  /** Order by lastModifiedAt */
  LastModifiedAt = 'LAST_MODIFIED_AT'
}

/** Filter used to filter AssignmentTypeChangedEvent */
export type AssignmentTypeChangedEventFilterInput = {
  /** Connects all subformulas via and */
  and?: InputMaybe<Array<AssignmentTypeChangedEventFilterInput>>;
  /** Filters for nodes where the related node match this filter */
  assignment?: InputMaybe<AssignmentFilterInput>;
  /** Filter by createdAt */
  createdAt?: InputMaybe<DateTimeFilterInput>;
  /** Filters for nodes where the related node match this filter */
  createdBy?: InputMaybe<UserFilterInput>;
  /** Filter by id */
  id?: InputMaybe<IdFilterInput>;
  /** Filters for nodes where the related node match this filter */
  issue?: InputMaybe<IssueFilterInput>;
  /** Filter by lastModifiedAt */
  lastModifiedAt?: InputMaybe<DateTimeFilterInput>;
  /** Filters for nodes where the related node match this filter */
  lastModifiedBy?: InputMaybe<UserFilterInput>;
  /** Filters for nodes where the related node match this filter */
  newType?: InputMaybe<AssignmentTypeFilterInput>;
  /** Negates the subformula */
  not?: InputMaybe<AssignmentTypeChangedEventFilterInput>;
  /** Filters for nodes where the related node match this filter */
  oldType?: InputMaybe<AssignmentTypeFilterInput>;
  /** Connects all subformulas via or */
  or?: InputMaybe<Array<AssignmentTypeChangedEventFilterInput>>;
  /** Filters for nodes where the related node match this filter */
  parentItem?: InputMaybe<ParentTimelineItemFilterInput>;
  /** Filter for specific timeline items. Entries are joined by OR */
  timelineItemTypes?: InputMaybe<Array<TimelineItemType>>;
};

/** Filter used to filter AssignmentType */
export type AssignmentTypeFilterInput = {
  /** Connects all subformulas via and */
  and?: InputMaybe<Array<AssignmentTypeFilterInput>>;
  /** Filter by assignmentsWithType */
  assignmentsWithType?: InputMaybe<AssignmentListFilterInput>;
  /** Filter by description */
  description?: InputMaybe<StringFilterInput>;
  /** Filter by id */
  id?: InputMaybe<IdFilterInput>;
  /** Filter by name */
  name?: InputMaybe<StringFilterInput>;
  /** Negates the subformula */
  not?: InputMaybe<AssignmentTypeFilterInput>;
  /** Connects all subformulas via or */
  or?: InputMaybe<Array<AssignmentTypeFilterInput>>;
  /** Filter by partOf */
  partOf?: InputMaybe<IssueTemplateListFilterInput>;
};

/** Input to create an AssignmentType */
export type AssignmentTypeInput = {
  /** The description of the NamedNode */
  description: Scalars['String']['input'];
  /** The name of the NamedNode, must not be blank */
  name: Scalars['String']['input'];
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type AssignmentTypeListFilterInput = {
  /** Filters for nodes where all of the related nodes match this filter */
  all?: InputMaybe<AssignmentTypeFilterInput>;
  /** Filters for nodes where any of the related nodes match this filter */
  any?: InputMaybe<AssignmentTypeFilterInput>;
  /** Filters for nodes where none of the related nodes match this filter */
  none?: InputMaybe<AssignmentTypeFilterInput>;
};

/** Defines the order of a AssignmentType list */
export type AssignmentTypeOrder = {
  /** The direction to order by, defaults to ASC */
  direction?: InputMaybe<OrderDirection>;
  /** The field to order by, defaults to ID */
  field?: InputMaybe<AssignmentTypeOrderField>;
};

/** Fields a list of AssignmentType can be sorted by */
export enum AssignmentTypeOrderField {
  /** Order by id */
  Id = 'ID',
  /** Order by name */
  Name = 'NAME'
}

/** Filter used to filter AuditedNode */
export type AuditedNodeFilterInput = {
  /** Connects all subformulas via and */
  and?: InputMaybe<Array<AuditedNodeFilterInput>>;
  /** Filter by createdAt */
  createdAt?: InputMaybe<DateTimeFilterInput>;
  /** Filters for nodes where the related node match this filter */
  createdBy?: InputMaybe<UserFilterInput>;
  /** Filter by id */
  id?: InputMaybe<IdFilterInput>;
  /** Filter for nodes of type AbstractTypeChangedEvent */
  isAbstractTypeChangedEventAnd?: InputMaybe<AbstractTypeChangedEventFilterInput>;
  /** Filter for nodes of type AddedAffectedEntityEvent */
  isAddedAffectedEntityEventAnd?: InputMaybe<AddedAffectedEntityEventFilterInput>;
  /** Filter for nodes of type AddedArtefactEvent */
  isAddedArtefactEventAnd?: InputMaybe<AddedArtefactEventFilterInput>;
  /** Filter for nodes of type AddedLabelEvent */
  isAddedLabelEventAnd?: InputMaybe<AddedLabelEventFilterInput>;
  /** Filter for nodes of type AddedToPinnedIssuesEvent */
  isAddedToPinnedIssuesEventAnd?: InputMaybe<AddedToPinnedIssuesEventFilterInput>;
  /** Filter for nodes of type AddedToTrackableEvent */
  isAddedToTrackableEventAnd?: InputMaybe<AddedToTrackableEventFilterInput>;
  /** Filter for nodes of type Artefact */
  isArtefactAnd?: InputMaybe<ArtefactFilterInput>;
  /** Filter for nodes of type Assignment */
  isAssignmentAnd?: InputMaybe<AssignmentFilterInput>;
  /** Filter for nodes of type AssignmentTypeChangedEvent */
  isAssignmentTypeChangedEventAnd?: InputMaybe<AssignmentTypeChangedEventFilterInput>;
  /** Filter for nodes of type Body */
  isBodyAnd?: InputMaybe<BodyFilterInput>;
  /** Filter for nodes of type Comment */
  isCommentAnd?: InputMaybe<CommentFilterInput>;
  /** Filter for nodes of type IncomingRelationTypeChangedEvent */
  isIncomingRelationTypeChangedEventAnd?: InputMaybe<IncomingRelationTypeChangedEventFilterInput>;
  /** Filter for nodes of type Issue */
  isIssueAnd?: InputMaybe<IssueFilterInput>;
  /** Filter for nodes of type IssueComment */
  isIssueCommentAnd?: InputMaybe<IssueCommentFilterInput>;
  /** Filter for nodes of type IssueRelation */
  isIssueRelationAnd?: InputMaybe<IssueRelationFilterInput>;
  /** Filter for nodes of type Label */
  isLabelAnd?: InputMaybe<LabelFilterInput>;
  /** Filter for nodes of type NamedAuditedNode */
  isNamedAuditedNodeAnd?: InputMaybe<NamedAuditedNodeFilterInput>;
  /** Filter for nodes of type OutgoingRelationTypeChangedEvent */
  isOutgoingRelationTypeChangedEventAnd?: InputMaybe<OutgoingRelationTypeChangedEventFilterInput>;
  /** Filter for nodes of type ParentTimelineItem */
  isParentTimelineItemAnd?: InputMaybe<ParentTimelineItemFilterInput>;
  /** Filter for nodes of type PriorityChangedEvent */
  isPriorityChangedEventAnd?: InputMaybe<PriorityChangedEventFilterInput>;
  /** Filter for nodes of type PublicTimelineItem */
  isPublicTimelineItemAnd?: InputMaybe<PublicTimelineItemFilterInput>;
  /** Filter for nodes of type RelatedByIssueEvent */
  isRelatedByIssueEventAnd?: InputMaybe<RelatedByIssueEventFilterInput>;
  /** Filter for nodes of type RelationTypeChangedEvent */
  isRelationTypeChangedEventAnd?: InputMaybe<RelationTypeChangedEventFilterInput>;
  /** Filter for nodes of type RemovedAffectedEntityEvent */
  isRemovedAffectedEntityEventAnd?: InputMaybe<RemovedAffectedEntityEventFilterInput>;
  /** Filter for nodes of type RemovedArtefactEvent */
  isRemovedArtefactEventAnd?: InputMaybe<RemovedArtefactEventFilterInput>;
  /** Filter for nodes of type RemovedAssignmentEvent */
  isRemovedAssignmentEventAnd?: InputMaybe<RemovedAssignmentEventFilterInput>;
  /** Filter for nodes of type RemovedFromPinnedIssuesEvent */
  isRemovedFromPinnedIssuesEventAnd?: InputMaybe<RemovedFromPinnedIssuesEventFilterInput>;
  /** Filter for nodes of type RemovedFromTrackableEvent */
  isRemovedFromTrackableEventAnd?: InputMaybe<RemovedFromTrackableEventFilterInput>;
  /** Filter for nodes of type RemovedIncomingRelationEvent */
  isRemovedIncomingRelationEventAnd?: InputMaybe<RemovedIncomingRelationEventFilterInput>;
  /** Filter for nodes of type RemovedLabelEvent */
  isRemovedLabelEventAnd?: InputMaybe<RemovedLabelEventFilterInput>;
  /** Filter for nodes of type RemovedOutgoingRelationEvent */
  isRemovedOutgoingRelationEventAnd?: InputMaybe<RemovedOutgoingRelationEventFilterInput>;
  /** Filter for nodes of type RemovedRelationEvent */
  isRemovedRelationEventAnd?: InputMaybe<RemovedRelationEventFilterInput>;
  /** Filter for nodes of type RemovedTemplatedFieldEvent */
  isRemovedTemplatedFieldEventAnd?: InputMaybe<RemovedTemplatedFieldEventFilterInput>;
  /** Filter for nodes of type StateChangedEvent */
  isStateChangedEventAnd?: InputMaybe<StateChangedEventFilterInput>;
  /** Filter for nodes of type TemplateChangedEvent */
  isTemplateChangedEventAnd?: InputMaybe<TemplateChangedEventFilterInput>;
  /** Filter for nodes of type TemplatedFieldChangedEvent */
  isTemplatedFieldChangedEventAnd?: InputMaybe<TemplatedFieldChangedEventFilterInput>;
  /** Filter for nodes of type TimelineItem */
  isTimelineItemAnd?: InputMaybe<TimelineItemFilterInput>;
  /** Filter for nodes of type TitleChangedEvent */
  isTitleChangedEventAnd?: InputMaybe<TitleChangedEventFilterInput>;
  /** Filter for nodes of type TypeChangedEvent */
  isTypeChangedEventAnd?: InputMaybe<TypeChangedEventFilterInput>;
  /** Filter by lastModifiedAt */
  lastModifiedAt?: InputMaybe<DateTimeFilterInput>;
  /** Filters for nodes where the related node match this filter */
  lastModifiedBy?: InputMaybe<UserFilterInput>;
  /** Negates the subformula */
  not?: InputMaybe<AuditedNodeFilterInput>;
  /** Connects all subformulas via or */
  or?: InputMaybe<Array<AuditedNodeFilterInput>>;
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type AuditedNodeListFilterInput = {
  /** Filters for nodes where all of the related nodes match this filter */
  all?: InputMaybe<AuditedNodeFilterInput>;
  /** Filters for nodes where any of the related nodes match this filter */
  any?: InputMaybe<AuditedNodeFilterInput>;
  /** Filters for nodes where none of the related nodes match this filter */
  none?: InputMaybe<AuditedNodeFilterInput>;
};

/** Defines the order of a AuditedNode list */
export type AuditedNodeOrder = {
  /** The direction to order by, defaults to ASC */
  direction?: InputMaybe<OrderDirection>;
  /** The field to order by, defaults to ID */
  field?: InputMaybe<AuditedNodeOrderField>;
};

/** Fields a list of AuditedNode can be sorted by */
export enum AuditedNodeOrderField {
  /** Order by createdAt */
  CreatedAt = 'CREATED_AT',
  /** Order by id */
  Id = 'ID',
  /** Order by lastModifiedAt */
  LastModifiedAt = 'LAST_MODIFIED_AT'
}

/** Filter used to filter BasePermission */
export type BasePermissionFilterInput = {
  /** Filter by allUsers */
  allUsers?: InputMaybe<BooleanFilterInput>;
  /** Connects all subformulas via and */
  and?: InputMaybe<Array<BasePermissionFilterInput>>;
  /** Filter by description */
  description?: InputMaybe<StringFilterInput>;
  /** Filter by id */
  id?: InputMaybe<IdFilterInput>;
  /** Filter for nodes of type ComponentPermission */
  isComponentPermissionAnd?: InputMaybe<ComponentPermissionFilterInput>;
  /** Filter for nodes of type GlobalPermission */
  isGlobalPermissionAnd?: InputMaybe<GlobalPermissionFilterInput>;
  /** Filter for nodes of type IMSPermission */
  isIMSPermissionAnd?: InputMaybe<ImsPermissionFilterInput>;
  /** Filter for nodes of type NodePermission */
  isNodePermissionAnd?: InputMaybe<NodePermissionFilterInput>;
  /** Filter for nodes of type ProjectPermission */
  isProjectPermissionAnd?: InputMaybe<ProjectPermissionFilterInput>;
  /** Filter for nodes of type TrackablePermission */
  isTrackablePermissionAnd?: InputMaybe<TrackablePermissionFilterInput>;
  /** Filter by name */
  name?: InputMaybe<StringFilterInput>;
  /** Negates the subformula */
  not?: InputMaybe<BasePermissionFilterInput>;
  /** Connects all subformulas via or */
  or?: InputMaybe<Array<BasePermissionFilterInput>>;
  /** Filter by users */
  users?: InputMaybe<GropiusUserListFilterInput>;
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type BasePermissionListFilterInput = {
  /** Filters for nodes where all of the related nodes match this filter */
  all?: InputMaybe<BasePermissionFilterInput>;
  /** Filters for nodes where any of the related nodes match this filter */
  any?: InputMaybe<BasePermissionFilterInput>;
  /** Filters for nodes where none of the related nodes match this filter */
  none?: InputMaybe<BasePermissionFilterInput>;
};

/** Defines the order of a BasePermission list */
export type BasePermissionOrder = {
  /** The direction to order by, defaults to ASC */
  direction?: InputMaybe<OrderDirection>;
  /** The field to order by, defaults to ID */
  field?: InputMaybe<BasePermissionOrderField>;
};

/** Fields a list of BasePermission can be sorted by */
export enum BasePermissionOrderField {
  /** Order by allUsers */
  AllUsers = 'ALL_USERS',
  /** Order by id */
  Id = 'ID',
  /** Order by name */
  Name = 'NAME'
}

/** Filter used to filter Body */
export type BodyFilterInput = {
  /** Connects all subformulas via and */
  and?: InputMaybe<Array<BodyFilterInput>>;
  /** Filter by answeredBy */
  answeredBy?: InputMaybe<IssueCommentListFilterInput>;
  /** Filter by bodyLastEditedAt */
  bodyLastEditedAt?: InputMaybe<DateTimeFilterInput>;
  /** Filters for nodes where the related node match this filter */
  bodyLastEditedBy?: InputMaybe<UserFilterInput>;
  /** Filter by createdAt */
  createdAt?: InputMaybe<DateTimeFilterInput>;
  /** Filters for nodes where the related node match this filter */
  createdBy?: InputMaybe<UserFilterInput>;
  /** Filter by id */
  id?: InputMaybe<IdFilterInput>;
  /** Filters for nodes where the related node match this filter */
  issue?: InputMaybe<IssueFilterInput>;
  /** Filter by lastModifiedAt */
  lastModifiedAt?: InputMaybe<DateTimeFilterInput>;
  /** Filters for nodes where the related node match this filter */
  lastModifiedBy?: InputMaybe<UserFilterInput>;
  /** Negates the subformula */
  not?: InputMaybe<BodyFilterInput>;
  /** Connects all subformulas via or */
  or?: InputMaybe<Array<BodyFilterInput>>;
  /** Filters for nodes where the related node match this filter */
  parentItem?: InputMaybe<ParentTimelineItemFilterInput>;
  /** Filter for specific timeline items. Entries are joined by OR */
  timelineItemTypes?: InputMaybe<Array<TimelineItemType>>;
};

/** Filter which can be used to filter for Nodes with a specific Boolean field */
export type BooleanFilterInput = {
  /** Matches values which are equal to the provided value */
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches values which are equal to any of the provided values */
  in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

/** Input for the bulkCreateComponent mutation */
export type BulkCreateComponentInput = {
  /** The input for the createComponent mutation */
  components: Array<CreateComponentInput>;
};

/** Input to create multiple Components */
export type BulkCreateRelationInput = {
  /** The input for the createRelation mutation */
  relations: Array<CreateRelationInput>;
};

/** Input for the changeAssignmentType mutation */
export type ChangeAssignmentTypeInput = {
  /** The id of the Assignment of which the type is updated */
  assignment: Scalars['ID']['input'];
  /** The id of the new type, must be defined by the template of the Issue */
  type?: InputMaybe<Scalars['ID']['input']>;
};

/** Input for the changeIssuePriority mutation */
export type ChangeIssuePriorityInput = {
  /** The id of the Issue of which the priority is updated */
  issue: Scalars['ID']['input'];
  /** The id of the new priority, must be an IssuePriority of the used IssueTemplate */
  priority?: InputMaybe<Scalars['ID']['input']>;
};

/** Input for the changeIssueRelationType mutation */
export type ChangeIssueRelationTypeInput = {
  /** The id of the IssueRelation of which the type is updated */
  issueRelation: Scalars['ID']['input'];
  /** The id of the new type, must be defined by the template of the Issue */
  type?: InputMaybe<Scalars['ID']['input']>;
};

/** Input for the changeIssueState mutation */
export type ChangeIssueStateInput = {
  /** The id of the Issue of which the state is updated */
  issue: Scalars['ID']['input'];
  /** The id of the new state, must be an IssueState of the used IssueTemplate */
  state: Scalars['ID']['input'];
};

/** Input for the changeIssueTemplate mutation */
export type ChangeIssueTemplateInput = {
  /** Mapping to map existing Assignment Types to new ones */
  assignmentTypeMapping?: InputMaybe<Array<TypeMappingInput>>;
  /** The Issue to update the template of */
  issue: Scalars['ID']['input'];
  /** Mapping to map existing IssueRelationTypes to new ones */
  issueRelationTypeMapping?: InputMaybe<Array<TypeMappingInput>>;
  /** The new priority of the Issue */
  priority?: InputMaybe<Scalars['ID']['input']>;
  /** The new state of the Issue, required if the old one is not compatible with the new template */
  state?: InputMaybe<Scalars['ID']['input']>;
  /** If provided, the id of the new template for the Issue */
  template: Scalars['ID']['input'];
  /** Values for templatedFields to update, required to ensure compatibility with the new template */
  templatedFields?: InputMaybe<Array<JsonFieldInput>>;
  /** The new type of the Issue, required if the old one is not compatible with the new template */
  type?: InputMaybe<Scalars['ID']['input']>;
};

/** Input for the changeIssueTemplatedField mutations */
export type ChangeIssueTemplatedFieldInput = {
  /** The id of the Issue of which to change a templated field */
  issue: Scalars['ID']['input'];
  /** The name of the templated field to update */
  name: Scalars['String']['input'];
  /** The new value of the templated field */
  value?: InputMaybe<Scalars['JSON']['input']>;
};

/** Input for the changeIssueTitle mutation */
export type ChangeIssueTitleInput = {
  /** The id of the Issue of which the title is updated */
  issue: Scalars['ID']['input'];
  /** The new title */
  title: Scalars['String']['input'];
};

/** Input for the changeIssueType mutation */
export type ChangeIssueTypeInput = {
  /** The id of the Issue of which the type is updated */
  issue: Scalars['ID']['input'];
  /** The id of the new type, must be an IssueType of the used IssueTemplate */
  type: Scalars['ID']['input'];
};

/** Filter used to filter Comment */
export type CommentFilterInput = {
  /** Connects all subformulas via and */
  and?: InputMaybe<Array<CommentFilterInput>>;
  /** Filter by answeredBy */
  answeredBy?: InputMaybe<IssueCommentListFilterInput>;
  /** Filter by bodyLastEditedAt */
  bodyLastEditedAt?: InputMaybe<DateTimeFilterInput>;
  /** Filters for nodes where the related node match this filter */
  bodyLastEditedBy?: InputMaybe<UserFilterInput>;
  /** Filter by createdAt */
  createdAt?: InputMaybe<DateTimeFilterInput>;
  /** Filters for nodes where the related node match this filter */
  createdBy?: InputMaybe<UserFilterInput>;
  /** Filter by id */
  id?: InputMaybe<IdFilterInput>;
  /** Filter for nodes of type Body */
  isBodyAnd?: InputMaybe<BodyFilterInput>;
  /** Filter for nodes of type IssueComment */
  isIssueCommentAnd?: InputMaybe<IssueCommentFilterInput>;
  /** Filters for nodes where the related node match this filter */
  issue?: InputMaybe<IssueFilterInput>;
  /** Filter by lastModifiedAt */
  lastModifiedAt?: InputMaybe<DateTimeFilterInput>;
  /** Filters for nodes where the related node match this filter */
  lastModifiedBy?: InputMaybe<UserFilterInput>;
  /** Negates the subformula */
  not?: InputMaybe<CommentFilterInput>;
  /** Connects all subformulas via or */
  or?: InputMaybe<Array<CommentFilterInput>>;
  /** Filters for nodes where the related node match this filter */
  parentItem?: InputMaybe<ParentTimelineItemFilterInput>;
  /** Filter for specific timeline items. Entries are joined by OR */
  timelineItemTypes?: InputMaybe<Array<TimelineItemType>>;
};

/** Filter used to filter Component */
export type ComponentFilterInput = {
  /** Filter by affectingIssues */
  affectingIssues?: InputMaybe<IssueListFilterInput>;
  /** Connects all subformulas via and */
  and?: InputMaybe<Array<ComponentFilterInput>>;
  /** Filter by artefacts */
  artefacts?: InputMaybe<ArtefactListFilterInput>;
  /** Filter by description */
  description?: InputMaybe<StringFilterInput>;
  /** Filter by id */
  id?: InputMaybe<IdFilterInput>;
  /** Filter by interfaceSpecifications */
  interfaceSpecifications?: InputMaybe<InterfaceSpecificationListFilterInput>;
  /** Filter by issues */
  issues?: InputMaybe<IssueListFilterInput>;
  /** Filter by labels */
  labels?: InputMaybe<LabelListFilterInput>;
  /** Filter by name */
  name?: InputMaybe<StringFilterInput>;
  /** Negates the subformula */
  not?: InputMaybe<ComponentFilterInput>;
  /** Connects all subformulas via or */
  or?: InputMaybe<Array<ComponentFilterInput>>;
  /** Filter by permissions */
  permissions?: InputMaybe<ComponentPermissionListFilterInput>;
  /** Filter by pinnedIssues */
  pinnedIssues?: InputMaybe<IssueListFilterInput>;
  /** Filters for AffectedByIssues which are related to a Trackable */
  relatedTo?: InputMaybe<Scalars['ID']['input']>;
  /** Filter by repositoryURL */
  repositoryURL?: InputMaybe<NullableStringFilterInput>;
  /** Filter by syncsTo */
  syncsTo?: InputMaybe<ImsProjectListFilterInput>;
  /** Filters for nodes where the related node match this filter */
  template?: InputMaybe<ComponentTemplateFilterInput>;
  /** Filter for templated fields with matching key and values. Entries are joined by AND */
  templatedFields?: InputMaybe<Array<InputMaybe<JsonFieldInput>>>;
  /** Filter by versions */
  versions?: InputMaybe<ComponentVersionListFilterInput>;
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type ComponentListFilterInput = {
  /** Filters for nodes where all of the related nodes match this filter */
  all?: InputMaybe<ComponentFilterInput>;
  /** Filters for nodes where any of the related nodes match this filter */
  any?: InputMaybe<ComponentFilterInput>;
  /** Filters for nodes where none of the related nodes match this filter */
  none?: InputMaybe<ComponentFilterInput>;
};

/** Defines the order of a Component list */
export type ComponentOrder = {
  /** The direction to order by, defaults to ASC */
  direction?: InputMaybe<OrderDirection>;
  /** The field to order by, defaults to ID */
  field?: InputMaybe<ComponentOrderField>;
};

/** Fields a list of Component can be sorted by */
export enum ComponentOrderField {
  /** Order by id */
  Id = 'ID',
  /** Order by name */
  Name = 'NAME',
  /** Order by template_id */
  TemplateId = 'TEMPLATE_ID',
  /** Order by template_name */
  TemplateName = 'TEMPLATE_NAME'
}

/** ComponentPermission entry enum type. */
export enum ComponentPermissionEntry {
  /**
   * Allows to add the Component to Projects
   * Note: this should be handled very carefully, as adding a Component to a Project gives
   * all users with READ access to the Project READ access to the Component
   */
  AddToProjects = 'ADD_TO_PROJECTS',
  /** Grants all other permissions on the Node except READ. */
  Admin = 'ADMIN',
  /**
   * Allows affecting entities part of this Trackable with any Issues.
   * Affectable entitites include
   *   - the Trackable itself
   *   - in case the Trackable is a Component
   *     - InterfaceSpecifications, their InterfaceSpecificationVersions and their InterfaceParts of the Component (not inherited ones)
   *     - Interfaces on the Component
   *     - ComponentVersions of the Component
   */
  AffectEntitiesWithIssues = 'AFFECT_ENTITIES_WITH_ISSUES',
  /**
   * Allows to create Comments on Issues on this Trackable.
   * Also allows editing of your own Comments.
   */
  Comment = 'COMMENT',
  /**
   * Allows to create new Issues on the Trackable.
   * This includes adding Issues from other Trackables.
   */
  CreateIssues = 'CREATE_ISSUES',
  /** Allows adding Issues on this Trackable to other Trackables. */
  ExportIssues = 'EXPORT_ISSUES',
  /** Allows adding Labels on this Trackable to other Trackables. */
  ExportLabels = 'EXPORT_LABELS',
  /** Allows to add, remove, and update Artefacts on this Trackable. */
  ManageArtefacts = 'MANAGE_ARTEFACTS',
  /**
   * Allows to add, remove, and update IMSProjects on this Trackable.
   * Note: for adding, `IMSPermissionEntry.SYNC_TRACKABLES` is required additionally
   */
  ManageIms = 'MANAGE_IMS',
  /**
   * Allows to manage issues.
   * This includes `CREATE_ISSUES` and `COMMENT`.
   * This does NOT include `LINK_TO_ISSUES` and `LINK_FROM_ISSUES`.
   * Additionaly includes
   *   - change the Template
   *   - add / remove Labels
   *   - add / remove Artefacts
   *   - change any field on the Issue (title, startDate, dueDate, ...)
   *   - change templated fields
   * In contrast to `MODERATOR`, this does not allow editing / removing Comments of other users
   */
  ManageIssues = 'MANAGE_ISSUES',
  /**
   * Allows to add, remove, and update Labels on this Trackable.
   * Also allows to delete a Label, but only if it is allowed on all Trackable the Label is on.
   */
  ManageLabels = 'MANAGE_LABELS',
  /**
   * Allows to moderate Issues on this Trackable.
   * This allows everything `MANAGE_ISSUES` allows.
   * Additionally, it allows editing and deleting Comments of other Users
   */
  Moderator = 'MODERATOR',
  /**
   * Allows to read the Node (obtain it via the API) and to read certain related Nodes.
   * See documentation for specific Node for the specific conditions.
   */
  Read = 'READ',
  /**
   * Allows to create Relations with a version of this Component or an Interface of this Component
   * as start.
   * Note: as these Relations cannot cause new Interfaces on this Component, this can be granted
   * more permissively compared to `RELATE_TO_COMPONENT`.
   */
  RelateFromComponent = 'RELATE_FROM_COMPONENT'
}

/** Filter used to filter ComponentPermission */
export type ComponentPermissionFilterInput = {
  /** Filter by allUsers */
  allUsers?: InputMaybe<BooleanFilterInput>;
  /** Connects all subformulas via and */
  and?: InputMaybe<Array<ComponentPermissionFilterInput>>;
  /** Filter by description */
  description?: InputMaybe<StringFilterInput>;
  /** Filter by id */
  id?: InputMaybe<IdFilterInput>;
  /** Filter by name */
  name?: InputMaybe<StringFilterInput>;
  /** Filter by nodesWithPermission */
  nodesWithPermission?: InputMaybe<ComponentListFilterInput>;
  /** Negates the subformula */
  not?: InputMaybe<ComponentPermissionFilterInput>;
  /** Connects all subformulas via or */
  or?: InputMaybe<Array<ComponentPermissionFilterInput>>;
  /** Filter by users */
  users?: InputMaybe<GropiusUserListFilterInput>;
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type ComponentPermissionListFilterInput = {
  /** Filters for nodes where all of the related nodes match this filter */
  all?: InputMaybe<ComponentPermissionFilterInput>;
  /** Filters for nodes where any of the related nodes match this filter */
  any?: InputMaybe<ComponentPermissionFilterInput>;
  /** Filters for nodes where none of the related nodes match this filter */
  none?: InputMaybe<ComponentPermissionFilterInput>;
};

/** Defines the order of a ComponentPermission list */
export type ComponentPermissionOrder = {
  /** The direction to order by, defaults to ASC */
  direction?: InputMaybe<OrderDirection>;
  /** The field to order by, defaults to ID */
  field?: InputMaybe<ComponentPermissionOrderField>;
};

/** Fields a list of ComponentPermission can be sorted by */
export enum ComponentPermissionOrderField {
  /** Order by allUsers */
  AllUsers = 'ALL_USERS',
  /** Order by id */
  Id = 'ID',
  /** Order by name */
  Name = 'NAME'
}

/** Filter used to filter ComponentTemplate */
export type ComponentTemplateFilterInput = {
  /** Connects all subformulas via and */
  and?: InputMaybe<Array<ComponentTemplateFilterInput>>;
  /** Filter by description */
  description?: InputMaybe<StringFilterInput>;
  /** Filter by extendedBy */
  extendedBy?: InputMaybe<ComponentTemplateListFilterInput>;
  /** Filter by extends */
  extends?: InputMaybe<ComponentTemplateListFilterInput>;
  /** Filter by id */
  id?: InputMaybe<IdFilterInput>;
  /** Filter by isDeprecated */
  isDeprecated?: InputMaybe<BooleanFilterInput>;
  /** Filter by name */
  name?: InputMaybe<StringFilterInput>;
  /** Negates the subformula */
  not?: InputMaybe<ComponentTemplateFilterInput>;
  /** Connects all subformulas via or */
  or?: InputMaybe<Array<ComponentTemplateFilterInput>>;
  /** Filter by possibleEndOfRelations */
  possibleEndOfRelations?: InputMaybe<RelationConditionListFilterInput>;
  /** Filter by possibleInvisibleInterfaceSpecifications */
  possibleInvisibleInterfaceSpecifications?: InputMaybe<InterfaceSpecificationTemplateListFilterInput>;
  /** Filter by possibleStartOfRelations */
  possibleStartOfRelations?: InputMaybe<RelationConditionListFilterInput>;
  /** Filter by possibleVisibleInterfaceSpecifications */
  possibleVisibleInterfaceSpecifications?: InputMaybe<InterfaceSpecificationTemplateListFilterInput>;
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type ComponentTemplateListFilterInput = {
  /** Filters for nodes where all of the related nodes match this filter */
  all?: InputMaybe<ComponentTemplateFilterInput>;
  /** Filters for nodes where any of the related nodes match this filter */
  any?: InputMaybe<ComponentTemplateFilterInput>;
  /** Filters for nodes where none of the related nodes match this filter */
  none?: InputMaybe<ComponentTemplateFilterInput>;
};

/** Defines the order of a ComponentTemplate list */
export type ComponentTemplateOrder = {
  /** The direction to order by, defaults to ASC */
  direction?: InputMaybe<OrderDirection>;
  /** The field to order by, defaults to ID */
  field?: InputMaybe<ComponentTemplateOrderField>;
};

/** Fields a list of ComponentTemplate can be sorted by */
export enum ComponentTemplateOrderField {
  /** Order by id */
  Id = 'ID',
  /** Order by name */
  Name = 'NAME'
}

/** Filter used to filter ComponentVersion */
export type ComponentVersionFilterInput = {
  /** Filter by affectingIssues */
  affectingIssues?: InputMaybe<IssueListFilterInput>;
  /** Filter by aggregatedIssues */
  aggregatedIssues?: InputMaybe<AggregatedIssueListFilterInput>;
  /** Connects all subformulas via and */
  and?: InputMaybe<Array<ComponentVersionFilterInput>>;
  /** Filters for nodes where the related node match this filter */
  component?: InputMaybe<ComponentFilterInput>;
  /** Filter by id */
  id?: InputMaybe<IdFilterInput>;
  /** Filter by includingProjects */
  includingProjects?: InputMaybe<ProjectListFilterInput>;
  /** Filter by incomingRelations */
  incomingRelations?: InputMaybe<RelationListFilterInput>;
  /** Filter by interfaceDefinitions */
  interfaceDefinitions?: InputMaybe<InterfaceDefinitionListFilterInput>;
  /** Filter by intraComponentDependencySpecifications */
  intraComponentDependencySpecifications?: InputMaybe<IntraComponentDependencySpecificationListFilterInput>;
  /** Negates the subformula */
  not?: InputMaybe<ComponentVersionFilterInput>;
  /** Connects all subformulas via or */
  or?: InputMaybe<Array<ComponentVersionFilterInput>>;
  /** Filter by outgoingRelations */
  outgoingRelations?: InputMaybe<RelationListFilterInput>;
  /** Filters for RelationPartners which are part of a Project's component graph */
  partOfProject?: InputMaybe<Scalars['ID']['input']>;
  /** Filters for AffectedByIssues which are related to a Trackable */
  relatedTo?: InputMaybe<Scalars['ID']['input']>;
  /** Filters for nodes where the related node match this filter */
  template?: InputMaybe<ComponentVersionTemplateFilterInput>;
  /** Filter for templated fields with matching key and values. Entries are joined by AND */
  templatedFields?: InputMaybe<Array<InputMaybe<JsonFieldInput>>>;
  /** Filter by version */
  version?: InputMaybe<StringFilterInput>;
};

/** Input to create a ComponentVersion */
export type ComponentVersionInput = {
  /** The tags of the created ComponentVersion */
  tags: Array<Scalars['String']['input']>;
  /** Initial values for all templatedFields */
  templatedFields: Array<JsonFieldInput>;
  /** The version of the created ComponentVersion */
  version: Scalars['String']['input'];
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type ComponentVersionListFilterInput = {
  /** Filters for nodes where all of the related nodes match this filter */
  all?: InputMaybe<ComponentVersionFilterInput>;
  /** Filters for nodes where any of the related nodes match this filter */
  any?: InputMaybe<ComponentVersionFilterInput>;
  /** Filters for nodes where none of the related nodes match this filter */
  none?: InputMaybe<ComponentVersionFilterInput>;
};

/** Defines the order of a ComponentVersion list */
export type ComponentVersionOrder = {
  /** The direction to order by, defaults to ASC */
  direction?: InputMaybe<OrderDirection>;
  /** The field to order by, defaults to ID */
  field?: InputMaybe<ComponentVersionOrderField>;
};

/** Fields a list of ComponentVersion can be sorted by */
export enum ComponentVersionOrderField {
  /** Order by id */
  Id = 'ID',
  /** Order by template_id */
  TemplateId = 'TEMPLATE_ID',
  /** Order by template_name */
  TemplateName = 'TEMPLATE_NAME',
  /** Order by version */
  Version = 'VERSION'
}

/** Filter used to filter ComponentVersionTemplate */
export type ComponentVersionTemplateFilterInput = {
  /** Connects all subformulas via and */
  and?: InputMaybe<Array<ComponentVersionTemplateFilterInput>>;
  /** Filter by description */
  description?: InputMaybe<StringFilterInput>;
  /** Filter by id */
  id?: InputMaybe<IdFilterInput>;
  /** Filter by name */
  name?: InputMaybe<StringFilterInput>;
  /** Negates the subformula */
  not?: InputMaybe<ComponentVersionTemplateFilterInput>;
  /** Connects all subformulas via or */
  or?: InputMaybe<Array<ComponentVersionTemplateFilterInput>>;
};

/** Input for the createArtefact mutation */
export type CreateArtefactInput = {
  /** The initial file of the Artefact */
  file: Scalars['URL']['input'];
  /** The initial value of the from field of the Artefact */
  from?: InputMaybe<Scalars['Int']['input']>;
  /** The template of the created Artefact */
  template: Scalars['ID']['input'];
  /** Initial values for all templatedFields */
  templatedFields: Array<JsonFieldInput>;
  /** The initial value of the to field of the Artefact */
  to?: InputMaybe<Scalars['Int']['input']>;
  /** ID of the Trackable the created Artefact is part of */
  trackable: Scalars['ID']['input'];
  /** Initial version of the Artefact */
  version?: InputMaybe<Scalars['String']['input']>;
};

/** Input for the createArtefactTemplate mutation */
export type CreateArtefactTemplateInput = {
  /** The description of the NamedNode */
  description: Scalars['String']['input'];
  /** IDs of Templates the created template extends. Must be templates of the same type. */
  extends?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** The name of the NamedNode, must not be blank */
  name: Scalars['String']['input'];
  /**
   * Additional initial templateFieldSpecifications, should be a JSON schema JSON.
   *         Must be disjoint with templateFieldSpecifications of templates this template extends.
   *
   */
  templateFieldSpecifications?: InputMaybe<Array<JsonFieldInput>>;
};

/** Input for the createAssignment mutation */
export type CreateAssignmentInput = {
  /** The optional type of the Assignment, must be defined by the Template of the Issue */
  assignmentType?: InputMaybe<Scalars['ID']['input']>;
  /** The id of the Issue to which the User should be assigned */
  issue: Scalars['ID']['input'];
  /** The id of the User to assign to the Issue */
  user: Scalars['ID']['input'];
};

/** Input for the createComponent mutation */
export type CreateComponentInput = {
  /** The description of the NamedNode */
  description: Scalars['String']['input'];
  /** Initial InterfaceSpecifications */
  interfaceSpecifications?: InputMaybe<Array<InterfaceSpecificationInput>>;
  /** The name of the NamedNode, must not be blank */
  name: Scalars['String']['input'];
  /** The repositoryURL of the named node */
  repositoryURL?: InputMaybe<Scalars['URL']['input']>;
  /** The template of the created Component */
  template: Scalars['ID']['input'];
  /** Initial values for all templatedFields */
  templatedFields: Array<JsonFieldInput>;
  /** Initial versions of the Component */
  versions?: InputMaybe<Array<ComponentVersionInput>>;
};

/** Input for the createComponentPermission mutation */
export type CreateComponentPermissionInput = {
  /** If `true`, the created BasePermission affects all users */
  allUsers: Scalars['Boolean']['input'];
  /** The description of the BasePermission */
  description: Scalars['String']['input'];
  /** The initial entries of the created ComponentPermission */
  entries: Array<ComponentPermissionEntry>;
  /** The name of the BasePermission, must not be blank */
  name: Scalars['String']['input'];
  /** The id of nodes the created permission affects. */
  nodesWithPermission: Array<Scalars['ID']['input']>;
  /** Ids of GropiusUsers this BasePermission affects */
  users: Array<Scalars['ID']['input']>;
};

/** Input for the createComponentTemplate mutation */
export type CreateComponentTemplateInput = {
  /** SubTemplate for all ComponentVersions of a Component with the created Template */
  componentVersionTemplate: SubTemplateInput;
  /** The description of the NamedNode */
  description: Scalars['String']['input'];
  /** IDs of Templates the created template extends. Must be templates of the same type. */
  extends?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Style of the fill */
  fill?: InputMaybe<FillStyleInput>;
  /** The name of the NamedNode, must not be blank */
  name: Scalars['String']['input'];
  /** The corner radius of the shape, ignored for circle/ellipse */
  shapeRadius?: InputMaybe<Scalars['Float']['input']>;
  /** The type of the shape */
  shapeType: ShapeType;
  /** Style of the stroke */
  stroke?: InputMaybe<StrokeStyleInput>;
  /**
   * Additional initial templateFieldSpecifications, should be a JSON schema JSON.
   *         Must be disjoint with templateFieldSpecifications of templates this template extends.
   *
   */
  templateFieldSpecifications?: InputMaybe<Array<JsonFieldInput>>;
};

/** Input for the createComponentVersion mutation */
export type CreateComponentVersionInput = {
  /** The id of the Component the created ComponentVersion is part of */
  component: Scalars['ID']['input'];
  /** The tags of the created ComponentVersion */
  tags: Array<Scalars['String']['input']>;
  /** Initial values for all templatedFields */
  templatedFields: Array<JsonFieldInput>;
  /** The version of the created ComponentVersion */
  version: Scalars['String']['input'];
};

/** Input for the createGlobalPermission mutation */
export type CreateGlobalPermissionInput = {
  /** If `true`, the created BasePermission affects all users */
  allUsers: Scalars['Boolean']['input'];
  /** The description of the BasePermission */
  description: Scalars['String']['input'];
  /** The initial entries of the created GlobalPermission */
  entries: Array<PermissionEntry>;
  /** The name of the BasePermission, must not be blank */
  name: Scalars['String']['input'];
  /** Ids of GropiusUsers this BasePermission affects */
  users: Array<Scalars['ID']['input']>;
};

/** Input for the createIMS mutation */
export type CreateImsInput = {
  /** The description of the NamedNode */
  description: Scalars['String']['input'];
  /** The name of the NamedNode, must not be blank */
  name: Scalars['String']['input'];
  /** The template of the created IMS */
  template: Scalars['ID']['input'];
  /** Initial values for all templatedFields */
  templatedFields: Array<JsonFieldInput>;
};

/** Input for the createIMSPermission mutation */
export type CreateImsPermissionInput = {
  /** If `true`, the created BasePermission affects all users */
  allUsers: Scalars['Boolean']['input'];
  /** The description of the BasePermission */
  description: Scalars['String']['input'];
  /** The initial entries of the created IMSPermission */
  entries: Array<ImsPermissionEntry>;
  /** The name of the BasePermission, must not be blank */
  name: Scalars['String']['input'];
  /** The id of nodes the created permission affects. */
  nodesWithPermission: Array<Scalars['ID']['input']>;
  /** Ids of GropiusUsers this BasePermission affects */
  users: Array<Scalars['ID']['input']>;
};

/** Input for the createIMSProject mutation */
export type CreateImsProjectInput = {
  /** The description of the NamedNode */
  description: Scalars['String']['input'];
  /** The id of the IMS the created project is part of */
  ims: Scalars['ID']['input'];
  /** The name of the NamedNode, must not be blank */
  name: Scalars['String']['input'];
  /** Initial values for all templatedFields */
  templatedFields: Array<JsonFieldInput>;
  /** The id of the Trackable which is synced */
  trackable: Scalars['ID']['input'];
};

/** Input for the createInterfacePart mutation */
export type CreateInterfacePartInput = {
  /** The description of the NamedNode */
  description: Scalars['String']['input'];
  /** The id of the InterfaceSpecificationVersion the created InterfacePart is part of */
  interfaceSpecificationVersion: Scalars['ID']['input'];
  /** The name of the NamedNode, must not be blank */
  name: Scalars['String']['input'];
  /** Initial values for all templatedFields */
  templatedFields: Array<JsonFieldInput>;
};

/** Input for the createInterfaceSpecification mutation */
export type CreateInterfaceSpecificationInput = {
  /** The id of the Component the created InterfaceSpecification is part of */
  component: Scalars['ID']['input'];
  /** The description of the NamedNode */
  description: Scalars['String']['input'];
  /** The name of the NamedNode, must not be blank */
  name: Scalars['String']['input'];
  /** The template of the created InterfaceSpecification */
  template: Scalars['ID']['input'];
  /** Initial values for all templatedFields */
  templatedFields: Array<JsonFieldInput>;
  /** Initial versions of the InterfaceSpecification */
  versions?: InputMaybe<Array<InterfaceSpecificationVersionInput>>;
};

/** Input for the createInterfaceSpecificationTemplate mutation */
export type CreateInterfaceSpecificationTemplateInput = {
  /** The IDs of Templates of Components InterfaceSpecifications with the created template can be invisible on */
  canBeInvisibleOnComponents: Array<Scalars['ID']['input']>;
  /** The IDs of Templates of Components InterfaceSpecifications with the created template can be visible on */
  canBeVisibleOnComponents: Array<Scalars['ID']['input']>;
  /** The description of the NamedNode */
  description: Scalars['String']['input'];
  /** IDs of Templates the created template extends. Must be templates of the same type. */
  extends?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Style of the fill */
  fill?: InputMaybe<FillStyleInput>;
  /** SubTemplate for all InterfaceParts of a InterfaceSpecification with the created Template */
  interfacePartTemplate: SubTemplateInput;
  /** SubTemplate for all InterfaceSpecificationVersions of a InterfaceSpecification with the created Template */
  interfaceSpecificationVersionTemplate: SubTemplateInput;
  /** The name of the NamedNode, must not be blank */
  name: Scalars['String']['input'];
  /** The corner radius of the shape, ignored for circle/ellipse */
  shapeRadius?: InputMaybe<Scalars['Float']['input']>;
  /** The type of the shape */
  shapeType: ShapeType;
  /** Style of the stroke */
  stroke?: InputMaybe<StrokeStyleInput>;
  /**
   * Additional initial templateFieldSpecifications, should be a JSON schema JSON.
   *         Must be disjoint with templateFieldSpecifications of templates this template extends.
   *
   */
  templateFieldSpecifications?: InputMaybe<Array<JsonFieldInput>>;
};

/** Input for the createInterfaceSpecificationVersion mutation */
export type CreateInterfaceSpecificationVersionInput = {
  /** The id of the InterfaceSpecification the created InterfaceSpecificationVersion is part of */
  interfaceSpecification: Scalars['ID']['input'];
  /** Initial InterfaceParts */
  parts?: InputMaybe<Array<InterfacePartInput>>;
  /** The tags of the created InterfaceSpecificationVersion */
  tags: Array<Scalars['String']['input']>;
  /** Initial values for all templatedFields */
  templatedFields: Array<JsonFieldInput>;
  /** The version of the created InterfaceSpecificationVersion */
  version: Scalars['String']['input'];
};

/** Input for the createIntraComponentDependencySpecification mutation */
export type CreateIntraComponentDependencySpecificationInput = {
  /** The id of the ComponentVersion the created IntraComponentDependencySpecification is part of */
  componentVersion: Scalars['ID']['input'];
  /** The description of the NamedNode */
  description: Scalars['String']['input'];
  /** Initial incomingParticipants, must not be empty */
  incomingParticipants: Array<IntraComponentDependencyParticipantInput>;
  /** The name of the NamedNode, must not be blank */
  name: Scalars['String']['input'];
  /** Initial outgoingParticipants, must not be empty */
  outgoingParticipants: Array<IntraComponentDependencyParticipantInput>;
};

/** Input for the createIssueComment mutation */
export type CreateIssueCommentInput = {
  /** The id of the Comment the created IssueComment answers */
  answers?: InputMaybe<Scalars['ID']['input']>;
  /** Initial body of the IssueComment */
  body: Scalars['String']['input'];
  /** The id of the Issue the IssueComment is created on */
  issue: Scalars['ID']['input'];
  /** Ids of initially referenced artefacts */
  referencedArtefacts?: InputMaybe<Array<Scalars['ID']['input']>>;
};

/** Input for the createIssue mutation */
export type CreateIssueInput = {
  /** The body of the created Issue */
  body: Scalars['String']['input'];
  /** The id of the state of the created Issue, must be compatible with template  */
  state: Scalars['ID']['input'];
  /** The template of the created Issue */
  template: Scalars['ID']['input'];
  /** Initial values for all templatedFields */
  templatedFields: Array<JsonFieldInput>;
  /** The title of the created Issue */
  title: Scalars['String']['input'];
  /** Ids of Trackables the Issue is initially on, must not be empty */
  trackables: Array<Scalars['ID']['input']>;
  /** The id of the type of the created Issue, must be compatible with template */
  type: Scalars['ID']['input'];
};

/** Input for the createIssueRelation mutation */
export type CreateIssueRelationInput = {
  /** The id of the Issue from which the IssueRelation starts */
  issue: Scalars['ID']['input'];
  /** The optional type of the IssueRelation, must be defined by the Template of the Issue */
  issueRelationType?: InputMaybe<Scalars['ID']['input']>;
  /** The id of the Issue where the IssueRelation ends */
  relatedIssue: Scalars['ID']['input'];
};

/** Input for the createIssueTemplate mutation. */
export type CreateIssueTemplateInput = {
  /** Set of all types Assignments to Issues with the created can have. */
  assignmentTypes: Array<AssignmentTypeInput>;
  /** The description of the NamedNode */
  description: Scalars['String']['input'];
  /** IDs of Templates the created template extends. Must be templates of the same type. */
  extends?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Set of all priorities Issues with the created can have. */
  issuePriorities: Array<IssuePriorityInput>;
  /** Set of all states Issues with the created Template can have */
  issueStates: Array<IssueStateInput>;
  /** Set of all types Issues with the created Template can have. */
  issueTypes: Array<IssueTypeInput>;
  /** The name of the NamedNode, must not be blank */
  name: Scalars['String']['input'];
  /** Set of all types outgoing IssueRelations of Issues with the created can have */
  relationTypes: Array<IssueRelationTypeInput>;
  /**
   * Additional initial templateFieldSpecifications, should be a JSON schema JSON.
   *         Must be disjoint with templateFieldSpecifications of templates this template extends.
   *
   */
  templateFieldSpecifications?: InputMaybe<Array<JsonFieldInput>>;
};

/** Input for the createLabel mutation */
export type CreateLabelInput = {
  /** Initial color of the Label */
  color: Scalars['String']['input'];
  /** The description of the NamedNode */
  description: Scalars['String']['input'];
  /** The name of the NamedNode, must not be blank */
  name: Scalars['String']['input'];
  /** IDs of Trackables the Label is added to, at least one required. */
  trackables: Array<Scalars['ID']['input']>;
};

/** Input for the createProject mutation */
export type CreateProjectInput = {
  /** The description of the NamedNode */
  description: Scalars['String']['input'];
  /** The name of the NamedNode, must not be blank */
  name: Scalars['String']['input'];
  /** The repositoryURL of the named node */
  repositoryURL?: InputMaybe<Scalars['URL']['input']>;
};

/** Input for the createProjectPermission mutation */
export type CreateProjectPermissionInput = {
  /** If `true`, the created BasePermission affects all users */
  allUsers: Scalars['Boolean']['input'];
  /** The description of the BasePermission */
  description: Scalars['String']['input'];
  /** The initial entries of the created ProjectPermission */
  entries: Array<ProjectPermissionEntry>;
  /** The name of the BasePermission, must not be blank */
  name: Scalars['String']['input'];
  /** The id of nodes the created permission affects. */
  nodesWithPermission: Array<Scalars['ID']['input']>;
  /** Ids of GropiusUsers this BasePermission affects */
  users: Array<Scalars['ID']['input']>;
};

/** Input for the createRelation mutation */
export type CreateRelationInput = {
  /** The end RelationPartner of the Relation */
  end: Scalars['ID']['input'];
  /** If `end` is an Interface, the parts of the Interface the created Relation includes */
  endParts?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** The start RelationPartner of the Relation */
  start: Scalars['ID']['input'];
  /** If `start` is an Interface, the parts of the Interface the created Relation includes */
  startParts?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** The template of the created Relation */
  template: Scalars['ID']['input'];
  /** Initial values for all templatedFields */
  templatedFields: Array<JsonFieldInput>;
};

/** Input for the createRelationTemplate mutation */
export type CreateRelationTemplateInput = {
  /** The description of the NamedNode */
  description: Scalars['String']['input'];
  /** IDs of Templates the created template extends. Must be templates of the same type. */
  extends?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** The type of the marker at the end of the relation. */
  markerType: MarkerType;
  /** The name of the NamedNode, must not be blank */
  name: Scalars['String']['input'];
  /** Defines which Relations can use the created Template, at least one RelationCondition has to match (logical OR) */
  relationConditions: Array<RelationConditionInput>;
  /** Style of the stroke */
  stroke?: InputMaybe<StrokeStyleInput>;
  /**
   * Additional initial templateFieldSpecifications, should be a JSON schema JSON.
   *         Must be disjoint with templateFieldSpecifications of templates this template extends.
   *
   */
  templateFieldSpecifications?: InputMaybe<Array<JsonFieldInput>>;
};

/** Input for the createView mutation */
export type CreateViewInput = {
  /** The description of the NamedNode */
  description: Scalars['String']['input'];
  /** The new filter of the view */
  filterByTemplate: Array<Scalars['ID']['input']>;
  /** The name of the NamedNode, must not be blank */
  name: Scalars['String']['input'];
  /** The id of the project the view belongs to */
  project: Scalars['ID']['input'];
  /** Defines the new layout of a set of Relations */
  relationLayouts?: InputMaybe<Array<UpdateRelationLayoutInput>>;
  /** Defines the new layout of a set of RelationPartners */
  relationPartnerLayouts?: InputMaybe<Array<UpdateRelationPartnerLayoutInput>>;
};

/** Filter which can be used to filter for Nodes with a specific DateTime field */
export type DateTimeFilterInput = {
  /** Matches values which are equal to the provided value */
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  /** Matches values which are greater than the provided value */
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Matches values which are greater than or equal to the provided value */
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Matches values which are equal to any of the provided values */
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  /** Matches values which are lesser than the provided value */
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Matches values which are lesser than or equal to the provided value */
  lte?: InputMaybe<Scalars['DateTime']['input']>;
};

/** Input for all delete mutations. Deletes the node with the specified id */
export type DeleteNodeInput = {
  /** The id of the Node to delete */
  id: Scalars['ID']['input'];
};

/** Input to create a FillStyle */
export type FillStyleInput = {
  /** The color of the fill */
  color: Scalars['String']['input'];
};

/** Filter which can be used to filter for Nodes with a specific Float field */
export type FloatFilterInput = {
  /** Matches values which are equal to the provided value */
  eq?: InputMaybe<Scalars['Float']['input']>;
  /** Matches values which are greater than the provided value */
  gt?: InputMaybe<Scalars['Float']['input']>;
  /** Matches values which are greater than or equal to the provided value */
  gte?: InputMaybe<Scalars['Float']['input']>;
  /** Matches values which are equal to any of the provided values */
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  /** Matches values which are lesser than the provided value */
  lt?: InputMaybe<Scalars['Float']['input']>;
  /** Matches values which are lesser than or equal to the provided value */
  lte?: InputMaybe<Scalars['Float']['input']>;
};

/** Filter used to filter GlobalPermission */
export type GlobalPermissionFilterInput = {
  /** Filter by allUsers */
  allUsers?: InputMaybe<BooleanFilterInput>;
  /** Connects all subformulas via and */
  and?: InputMaybe<Array<GlobalPermissionFilterInput>>;
  /** Filter by description */
  description?: InputMaybe<StringFilterInput>;
  /** Filter by id */
  id?: InputMaybe<IdFilterInput>;
  /** Filter by name */
  name?: InputMaybe<StringFilterInput>;
  /** Negates the subformula */
  not?: InputMaybe<GlobalPermissionFilterInput>;
  /** Connects all subformulas via or */
  or?: InputMaybe<Array<GlobalPermissionFilterInput>>;
  /** Filter by users */
  users?: InputMaybe<GropiusUserListFilterInput>;
};

/** Defines the order of a GlobalPermission list */
export type GlobalPermissionOrder = {
  /** The direction to order by, defaults to ASC */
  direction?: InputMaybe<OrderDirection>;
  /** The field to order by, defaults to ID */
  field?: InputMaybe<GlobalPermissionOrderField>;
};

/** Fields a list of GlobalPermission can be sorted by */
export enum GlobalPermissionOrderField {
  /** Order by allUsers */
  AllUsers = 'ALL_USERS',
  /** Order by id */
  Id = 'ID',
  /** Order by name */
  Name = 'NAME'
}

/** Filter used to filter GropiusUser */
export type GropiusUserFilterInput = {
  /** Connects all subformulas via and */
  and?: InputMaybe<Array<GropiusUserFilterInput>>;
  /** Filter by assignments */
  assignments?: InputMaybe<AssignmentListFilterInput>;
  /** Filter by canSyncOthers */
  canSyncOthers?: InputMaybe<SyncPermissionTargetListFilterInput>;
  /** Filter by canSyncSelf */
  canSyncSelf?: InputMaybe<SyncPermissionTargetListFilterInput>;
  /** Filter by createdNodes */
  createdNodes?: InputMaybe<AuditedNodeListFilterInput>;
  /** Filter by displayName */
  displayName?: InputMaybe<StringFilterInput>;
  /** Filter by email */
  email?: InputMaybe<NullableStringFilterInput>;
  /** Filter for users with a specific permission on a node */
  hasNodePermission?: InputMaybe<NodePermissionFilterEntry>;
  /** Filter by id */
  id?: InputMaybe<IdFilterInput>;
  /** Filter by imsUsers */
  imsUsers?: InputMaybe<ImsUserListFilterInput>;
  /** Negates the subformula */
  not?: InputMaybe<GropiusUserFilterInput>;
  /** Connects all subformulas via or */
  or?: InputMaybe<Array<GropiusUserFilterInput>>;
  /** Filter by participatedIssues */
  participatedIssues?: InputMaybe<IssueListFilterInput>;
  /** Filter by permissions */
  permissions?: InputMaybe<BasePermissionListFilterInput>;
  /** Filter by username */
  username?: InputMaybe<NullableStringFilterInput>;
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type GropiusUserListFilterInput = {
  /** Filters for nodes where all of the related nodes match this filter */
  all?: InputMaybe<GropiusUserFilterInput>;
  /** Filters for nodes where any of the related nodes match this filter */
  any?: InputMaybe<GropiusUserFilterInput>;
  /** Filters for nodes where none of the related nodes match this filter */
  none?: InputMaybe<GropiusUserFilterInput>;
};

/** Defines the order of a GropiusUser list */
export type GropiusUserOrder = {
  /** The direction to order by, defaults to ASC */
  direction?: InputMaybe<OrderDirection>;
  /** The field to order by, defaults to ID */
  field?: InputMaybe<GropiusUserOrderField>;
};

/** Fields a list of GropiusUser can be sorted by */
export enum GropiusUserOrderField {
  /** Order by displayName */
  DisplayName = 'DISPLAY_NAME',
  /** Order by email */
  Email = 'EMAIL',
  /** Order by id */
  Id = 'ID',
  /** Order by username */
  Username = 'USERNAME'
}

/** Filter which can be used to filter for Nodes with a specific ID field */
export type IdFilterInput = {
  /** Matches values which are equal to the provided value */
  eq?: InputMaybe<Scalars['ID']['input']>;
  /** Matches values which are equal to any of the provided values */
  in?: InputMaybe<Array<Scalars['ID']['input']>>;
};

/** Filter used to filter IMS */
export type ImsFilterInput = {
  /** Connects all subformulas via and */
  and?: InputMaybe<Array<ImsFilterInput>>;
  /** Filter by description */
  description?: InputMaybe<StringFilterInput>;
  /** Filter by id */
  id?: InputMaybe<IdFilterInput>;
  /** Filter by name */
  name?: InputMaybe<StringFilterInput>;
  /** Negates the subformula */
  not?: InputMaybe<ImsFilterInput>;
  /** Connects all subformulas via or */
  or?: InputMaybe<Array<ImsFilterInput>>;
  /** Filter by permissions */
  permissions?: InputMaybe<ImsPermissionListFilterInput>;
  /** Filter by projects */
  projects?: InputMaybe<ImsProjectListFilterInput>;
  /** Filter by syncOthersAllowedBy */
  syncOthersAllowedBy?: InputMaybe<GropiusUserListFilterInput>;
  /** Filter by syncSelfAllowedBy */
  syncSelfAllowedBy?: InputMaybe<GropiusUserListFilterInput>;
  /** Filters for nodes where the related node match this filter */
  template?: InputMaybe<ImsTemplateFilterInput>;
  /** Filter for templated fields with matching key and values. Entries are joined by AND */
  templatedFields?: InputMaybe<Array<InputMaybe<JsonFieldInput>>>;
  /** Filter by users */
  users?: InputMaybe<ImsUserListFilterInput>;
};

/** Filter used to filter IMSIssue */
export type ImsIssueFilterInput = {
  /** Connects all subformulas via and */
  and?: InputMaybe<Array<ImsIssueFilterInput>>;
  /** Filter by id */
  id?: InputMaybe<IdFilterInput>;
  /** Filters for nodes where the related node match this filter */
  imsProject?: InputMaybe<ImsProjectFilterInput>;
  /** Filters for nodes where the related node match this filter */
  issue?: InputMaybe<IssueFilterInput>;
  /** Negates the subformula */
  not?: InputMaybe<ImsIssueFilterInput>;
  /** Connects all subformulas via or */
  or?: InputMaybe<Array<ImsIssueFilterInput>>;
  /** Filters for nodes where the related node match this filter */
  template?: InputMaybe<ImsIssueTemplateFilterInput>;
  /** Filter for templated fields with matching key and values. Entries are joined by AND */
  templatedFields?: InputMaybe<Array<InputMaybe<JsonFieldInput>>>;
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type ImsIssueListFilterInput = {
  /** Filters for nodes where all of the related nodes match this filter */
  all?: InputMaybe<ImsIssueFilterInput>;
  /** Filters for nodes where any of the related nodes match this filter */
  any?: InputMaybe<ImsIssueFilterInput>;
  /** Filters for nodes where none of the related nodes match this filter */
  none?: InputMaybe<ImsIssueFilterInput>;
};

/** Defines the order of a IMSIssue list */
export type ImsIssueOrder = {
  /** The direction to order by, defaults to ASC */
  direction?: InputMaybe<OrderDirection>;
  /** The field to order by, defaults to ID */
  field?: InputMaybe<ImsIssueOrderField>;
};

/** Fields a list of IMSIssue can be sorted by */
export enum ImsIssueOrderField {
  /** Order by id */
  Id = 'ID',
  /** Order by template_id */
  TemplateId = 'TEMPLATE_ID',
  /** Order by template_name */
  TemplateName = 'TEMPLATE_NAME'
}

/** Filter used to filter IMSIssueTemplate */
export type ImsIssueTemplateFilterInput = {
  /** Connects all subformulas via and */
  and?: InputMaybe<Array<ImsIssueTemplateFilterInput>>;
  /** Filter by description */
  description?: InputMaybe<StringFilterInput>;
  /** Filter by id */
  id?: InputMaybe<IdFilterInput>;
  /** Filter by name */
  name?: InputMaybe<StringFilterInput>;
  /** Negates the subformula */
  not?: InputMaybe<ImsIssueTemplateFilterInput>;
  /** Connects all subformulas via or */
  or?: InputMaybe<Array<ImsIssueTemplateFilterInput>>;
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type ImsListFilterInput = {
  /** Filters for nodes where all of the related nodes match this filter */
  all?: InputMaybe<ImsFilterInput>;
  /** Filters for nodes where any of the related nodes match this filter */
  any?: InputMaybe<ImsFilterInput>;
  /** Filters for nodes where none of the related nodes match this filter */
  none?: InputMaybe<ImsFilterInput>;
};

/** Defines the order of a IMS list */
export type ImsOrder = {
  /** The direction to order by, defaults to ASC */
  direction?: InputMaybe<OrderDirection>;
  /** The field to order by, defaults to ID */
  field?: InputMaybe<ImsOrderField>;
};

/** Fields a list of IMS can be sorted by */
export enum ImsOrderField {
  /** Order by id */
  Id = 'ID',
  /** Order by name */
  Name = 'NAME',
  /** Order by template_id */
  TemplateId = 'TEMPLATE_ID',
  /** Order by template_name */
  TemplateName = 'TEMPLATE_NAME'
}

/** IMSPermission entry enum type. */
export enum ImsPermissionEntry {
  /** Grants all other permissions on the Node except READ. */
  Admin = 'ADMIN',
  /**
   * Allows to read the Node (obtain it via the API) and to read certain related Nodes.
   * See documentation for specific Node for the specific conditions.
   */
  Read = 'READ',
  /** Allows to create IMSProjects with this IMS. */
  SyncTrackables = 'SYNC_TRACKABLES'
}

/** Filter used to filter IMSPermission */
export type ImsPermissionFilterInput = {
  /** Filter by allUsers */
  allUsers?: InputMaybe<BooleanFilterInput>;
  /** Connects all subformulas via and */
  and?: InputMaybe<Array<ImsPermissionFilterInput>>;
  /** Filter by description */
  description?: InputMaybe<StringFilterInput>;
  /** Filter by id */
  id?: InputMaybe<IdFilterInput>;
  /** Filter by name */
  name?: InputMaybe<StringFilterInput>;
  /** Filter by nodesWithPermission */
  nodesWithPermission?: InputMaybe<ImsListFilterInput>;
  /** Negates the subformula */
  not?: InputMaybe<ImsPermissionFilterInput>;
  /** Connects all subformulas via or */
  or?: InputMaybe<Array<ImsPermissionFilterInput>>;
  /** Filter by users */
  users?: InputMaybe<GropiusUserListFilterInput>;
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type ImsPermissionListFilterInput = {
  /** Filters for nodes where all of the related nodes match this filter */
  all?: InputMaybe<ImsPermissionFilterInput>;
  /** Filters for nodes where any of the related nodes match this filter */
  any?: InputMaybe<ImsPermissionFilterInput>;
  /** Filters for nodes where none of the related nodes match this filter */
  none?: InputMaybe<ImsPermissionFilterInput>;
};

/** Defines the order of a IMSPermission list */
export type ImsPermissionOrder = {
  /** The direction to order by, defaults to ASC */
  direction?: InputMaybe<OrderDirection>;
  /** The field to order by, defaults to ID */
  field?: InputMaybe<ImsPermissionOrderField>;
};

/** Fields a list of IMSPermission can be sorted by */
export enum ImsPermissionOrderField {
  /** Order by allUsers */
  AllUsers = 'ALL_USERS',
  /** Order by id */
  Id = 'ID',
  /** Order by name */
  Name = 'NAME'
}

/** Filter used to filter IMSProject */
export type ImsProjectFilterInput = {
  /** Connects all subformulas via and */
  and?: InputMaybe<Array<ImsProjectFilterInput>>;
  /** Filter by description */
  description?: InputMaybe<StringFilterInput>;
  /** Filter by id */
  id?: InputMaybe<IdFilterInput>;
  /** Filters for nodes where the related node match this filter */
  ims?: InputMaybe<ImsFilterInput>;
  /** Filter by imsIssues */
  imsIssues?: InputMaybe<ImsIssueListFilterInput>;
  /** Filter by name */
  name?: InputMaybe<StringFilterInput>;
  /** Negates the subformula */
  not?: InputMaybe<ImsProjectFilterInput>;
  /** Connects all subformulas via or */
  or?: InputMaybe<Array<ImsProjectFilterInput>>;
  /** Filter by syncOthersAllowedBy */
  syncOthersAllowedBy?: InputMaybe<GropiusUserListFilterInput>;
  /** Filter by syncSelfAllowedBy */
  syncSelfAllowedBy?: InputMaybe<GropiusUserListFilterInput>;
  /** Filters for nodes where the related node match this filter */
  template?: InputMaybe<ImsProjectTemplateFilterInput>;
  /** Filter for templated fields with matching key and values. Entries are joined by AND */
  templatedFields?: InputMaybe<Array<InputMaybe<JsonFieldInput>>>;
  /** Filters for nodes where the related node match this filter */
  trackable?: InputMaybe<TrackableFilterInput>;
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type ImsProjectListFilterInput = {
  /** Filters for nodes where all of the related nodes match this filter */
  all?: InputMaybe<ImsProjectFilterInput>;
  /** Filters for nodes where any of the related nodes match this filter */
  any?: InputMaybe<ImsProjectFilterInput>;
  /** Filters for nodes where none of the related nodes match this filter */
  none?: InputMaybe<ImsProjectFilterInput>;
};

/** Defines the order of a IMSProject list */
export type ImsProjectOrder = {
  /** The direction to order by, defaults to ASC */
  direction?: InputMaybe<OrderDirection>;
  /** The field to order by, defaults to ID */
  field?: InputMaybe<ImsProjectOrderField>;
};

/** Fields a list of IMSProject can be sorted by */
export enum ImsProjectOrderField {
  /** Order by id */
  Id = 'ID',
  /** Order by ims_id */
  ImsId = 'IMS_ID',
  /** Order by ims_name */
  ImsName = 'IMS_NAME',
  /** Order by name */
  Name = 'NAME',
  /** Order by template_id */
  TemplateId = 'TEMPLATE_ID',
  /** Order by template_name */
  TemplateName = 'TEMPLATE_NAME'
}

/** Filter used to filter IMSProjectTemplate */
export type ImsProjectTemplateFilterInput = {
  /** Connects all subformulas via and */
  and?: InputMaybe<Array<ImsProjectTemplateFilterInput>>;
  /** Filter by description */
  description?: InputMaybe<StringFilterInput>;
  /** Filter by id */
  id?: InputMaybe<IdFilterInput>;
  /** Filter by name */
  name?: InputMaybe<StringFilterInput>;
  /** Negates the subformula */
  not?: InputMaybe<ImsProjectTemplateFilterInput>;
  /** Connects all subformulas via or */
  or?: InputMaybe<Array<ImsProjectTemplateFilterInput>>;
};

/** Filter used to filter IMSTemplate */
export type ImsTemplateFilterInput = {
  /** Connects all subformulas via and */
  and?: InputMaybe<Array<ImsTemplateFilterInput>>;
  /** Filter by description */
  description?: InputMaybe<StringFilterInput>;
  /** Filter by extendedBy */
  extendedBy?: InputMaybe<ImsTemplateListFilterInput>;
  /** Filter by extends */
  extends?: InputMaybe<ImsTemplateListFilterInput>;
  /** Filter by id */
  id?: InputMaybe<IdFilterInput>;
  /** Filter by isDeprecated */
  isDeprecated?: InputMaybe<BooleanFilterInput>;
  /** Filter by name */
  name?: InputMaybe<StringFilterInput>;
  /** Negates the subformula */
  not?: InputMaybe<ImsTemplateFilterInput>;
  /** Connects all subformulas via or */
  or?: InputMaybe<Array<ImsTemplateFilterInput>>;
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type ImsTemplateListFilterInput = {
  /** Filters for nodes where all of the related nodes match this filter */
  all?: InputMaybe<ImsTemplateFilterInput>;
  /** Filters for nodes where any of the related nodes match this filter */
  any?: InputMaybe<ImsTemplateFilterInput>;
  /** Filters for nodes where none of the related nodes match this filter */
  none?: InputMaybe<ImsTemplateFilterInput>;
};

/** Defines the order of a IMSTemplate list */
export type ImsTemplateOrder = {
  /** The direction to order by, defaults to ASC */
  direction?: InputMaybe<OrderDirection>;
  /** The field to order by, defaults to ID */
  field?: InputMaybe<ImsTemplateOrderField>;
};

/** Fields a list of IMSTemplate can be sorted by */
export enum ImsTemplateOrderField {
  /** Order by id */
  Id = 'ID',
  /** Order by name */
  Name = 'NAME'
}

/** Filter used to filter IMSUser */
export type ImsUserFilterInput = {
  /** Connects all subformulas via and */
  and?: InputMaybe<Array<ImsUserFilterInput>>;
  /** Filter by assignments */
  assignments?: InputMaybe<AssignmentListFilterInput>;
  /** Filter by createdNodes */
  createdNodes?: InputMaybe<AuditedNodeListFilterInput>;
  /** Filter by displayName */
  displayName?: InputMaybe<StringFilterInput>;
  /** Filter by email */
  email?: InputMaybe<NullableStringFilterInput>;
  /** Filters for nodes where the related node match this filter */
  gropiusUser?: InputMaybe<GropiusUserFilterInput>;
  /** Filter by id */
  id?: InputMaybe<IdFilterInput>;
  /** Filters for nodes where the related node match this filter */
  ims?: InputMaybe<ImsFilterInput>;
  /** Negates the subformula */
  not?: InputMaybe<ImsUserFilterInput>;
  /** Connects all subformulas via or */
  or?: InputMaybe<Array<ImsUserFilterInput>>;
  /** Filter by participatedIssues */
  participatedIssues?: InputMaybe<IssueListFilterInput>;
  /** Filters for nodes where the related node match this filter */
  template?: InputMaybe<ImsUserTemplateFilterInput>;
  /** Filter for templated fields with matching key and values. Entries are joined by AND */
  templatedFields?: InputMaybe<Array<InputMaybe<JsonFieldInput>>>;
  /** Filter by username */
  username?: InputMaybe<NullableStringFilterInput>;
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type ImsUserListFilterInput = {
  /** Filters for nodes where all of the related nodes match this filter */
  all?: InputMaybe<ImsUserFilterInput>;
  /** Filters for nodes where any of the related nodes match this filter */
  any?: InputMaybe<ImsUserFilterInput>;
  /** Filters for nodes where none of the related nodes match this filter */
  none?: InputMaybe<ImsUserFilterInput>;
};

/** Defines the order of a IMSUser list */
export type ImsUserOrder = {
  /** The direction to order by, defaults to ASC */
  direction?: InputMaybe<OrderDirection>;
  /** The field to order by, defaults to ID */
  field?: InputMaybe<ImsUserOrderField>;
};

/** Fields a list of IMSUser can be sorted by */
export enum ImsUserOrderField {
  /** Order by displayName */
  DisplayName = 'DISPLAY_NAME',
  /** Order by email */
  Email = 'EMAIL',
  /** Order by id */
  Id = 'ID',
  /** Order by username */
  Username = 'USERNAME'
}

/** Filter used to filter IMSUserTemplate */
export type ImsUserTemplateFilterInput = {
  /** Connects all subformulas via and */
  and?: InputMaybe<Array<ImsUserTemplateFilterInput>>;
  /** Filter by description */
  description?: InputMaybe<StringFilterInput>;
  /** Filter by id */
  id?: InputMaybe<IdFilterInput>;
  /** Filter by name */
  name?: InputMaybe<StringFilterInput>;
  /** Negates the subformula */
  not?: InputMaybe<ImsUserTemplateFilterInput>;
  /** Connects all subformulas via or */
  or?: InputMaybe<Array<ImsUserTemplateFilterInput>>;
};

/** Filter used to filter IncomingRelationTypeChangedEvent */
export type IncomingRelationTypeChangedEventFilterInput = {
  /** Connects all subformulas via and */
  and?: InputMaybe<Array<IncomingRelationTypeChangedEventFilterInput>>;
  /** Filter by createdAt */
  createdAt?: InputMaybe<DateTimeFilterInput>;
  /** Filters for nodes where the related node match this filter */
  createdBy?: InputMaybe<UserFilterInput>;
  /** Filter by id */
  id?: InputMaybe<IdFilterInput>;
  /** Filters for nodes where the related node match this filter */
  issue?: InputMaybe<IssueFilterInput>;
  /** Filters for nodes where the related node match this filter */
  issueRelation?: InputMaybe<IssueRelationFilterInput>;
  /** Filter by lastModifiedAt */
  lastModifiedAt?: InputMaybe<DateTimeFilterInput>;
  /** Filters for nodes where the related node match this filter */
  lastModifiedBy?: InputMaybe<UserFilterInput>;
  /** Filters for nodes where the related node match this filter */
  newType?: InputMaybe<IssueRelationTypeFilterInput>;
  /** Negates the subformula */
  not?: InputMaybe<IncomingRelationTypeChangedEventFilterInput>;
  /** Filters for nodes where the related node match this filter */
  oldType?: InputMaybe<IssueRelationTypeFilterInput>;
  /** Connects all subformulas via or */
  or?: InputMaybe<Array<IncomingRelationTypeChangedEventFilterInput>>;
  /** Filters for nodes where the related node match this filter */
  parentItem?: InputMaybe<ParentTimelineItemFilterInput>;
  /** Filter for specific timeline items. Entries are joined by OR */
  timelineItemTypes?: InputMaybe<Array<TimelineItemType>>;
};

/** Filter which can be used to filter for Nodes with a specific Int field */
export type IntFilterInput = {
  /** Matches values which are equal to the provided value */
  eq?: InputMaybe<Scalars['Int']['input']>;
  /** Matches values which are greater than the provided value */
  gt?: InputMaybe<Scalars['Int']['input']>;
  /** Matches values which are greater than or equal to the provided value */
  gte?: InputMaybe<Scalars['Int']['input']>;
  /** Matches values which are equal to any of the provided values */
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  /** Matches values which are lesser than the provided value */
  lt?: InputMaybe<Scalars['Int']['input']>;
  /** Matches values which are lesser than or equal to the provided value */
  lte?: InputMaybe<Scalars['Int']['input']>;
};

/** Filter used to filter InterfaceDefinition */
export type InterfaceDefinitionFilterInput = {
  /** Connects all subformulas via and */
  and?: InputMaybe<Array<InterfaceDefinitionFilterInput>>;
  /** Filters for nodes where the related node match this filter */
  componentVersion?: InputMaybe<ComponentVersionFilterInput>;
  /** Filter by id */
  id?: InputMaybe<IdFilterInput>;
  /** Filters for nodes where the related node match this filter */
  interfaceSpecificationVersion?: InputMaybe<InterfaceSpecificationVersionFilterInput>;
  /** Filter by invisibleDerivedBy */
  invisibleDerivedBy?: InputMaybe<RelationListFilterInput>;
  /** Filter by invisibleSelfDefined */
  invisibleSelfDefined?: InputMaybe<BooleanFilterInput>;
  /** Negates the subformula */
  not?: InputMaybe<InterfaceDefinitionFilterInput>;
  /** Connects all subformulas via or */
  or?: InputMaybe<Array<InterfaceDefinitionFilterInput>>;
  /** Filter by visibleDerivedBy */
  visibleDerivedBy?: InputMaybe<RelationListFilterInput>;
  /** Filters for nodes where the related node match this filter */
  visibleInterface?: InputMaybe<InterfaceFilterInput>;
  /** Filter by visibleSelfDefined */
  visibleSelfDefined?: InputMaybe<BooleanFilterInput>;
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type InterfaceDefinitionListFilterInput = {
  /** Filters for nodes where all of the related nodes match this filter */
  all?: InputMaybe<InterfaceDefinitionFilterInput>;
  /** Filters for nodes where any of the related nodes match this filter */
  any?: InputMaybe<InterfaceDefinitionFilterInput>;
  /** Filters for nodes where none of the related nodes match this filter */
  none?: InputMaybe<InterfaceDefinitionFilterInput>;
};

/** Defines the order of a InterfaceDefinition list */
export type InterfaceDefinitionOrder = {
  /** The direction to order by, defaults to ASC */
  direction?: InputMaybe<OrderDirection>;
  /** The field to order by, defaults to ID */
  field?: InputMaybe<InterfaceDefinitionOrderField>;
};

/** Fields a list of InterfaceDefinition can be sorted by */
export enum InterfaceDefinitionOrderField {
  /** Order by id */
  Id = 'ID',
  /** Order by interfaceSpecificationVersion_id */
  InterfaceSpecificationVersionId = 'INTERFACE_SPECIFICATION_VERSION_ID',
  /** Order by interfaceSpecificationVersion_version */
  InterfaceSpecificationVersionVersion = 'INTERFACE_SPECIFICATION_VERSION_VERSION',
  /** Order by invisibleSelfDefined */
  InvisibleSelfDefined = 'INVISIBLE_SELF_DEFINED',
  /** Order by visibleSelfDefined */
  VisibleSelfDefined = 'VISIBLE_SELF_DEFINED'
}

/** Filter used to filter Interface */
export type InterfaceFilterInput = {
  /** Filter by affectingIssues */
  affectingIssues?: InputMaybe<IssueListFilterInput>;
  /** Filter by aggregatedIssues */
  aggregatedIssues?: InputMaybe<AggregatedIssueListFilterInput>;
  /** Connects all subformulas via and */
  and?: InputMaybe<Array<InterfaceFilterInput>>;
  /** Filter by id */
  id?: InputMaybe<IdFilterInput>;
  /** Filter by incomingRelations */
  incomingRelations?: InputMaybe<RelationListFilterInput>;
  /** Filters for nodes where the related node match this filter */
  interfaceDefinition?: InputMaybe<InterfaceDefinitionFilterInput>;
  /** Filter by intraComponentDependencyParticipants */
  intraComponentDependencyParticipants?: InputMaybe<IntraComponentDependencyParticipantListFilterInput>;
  /** Negates the subformula */
  not?: InputMaybe<InterfaceFilterInput>;
  /** Connects all subformulas via or */
  or?: InputMaybe<Array<InterfaceFilterInput>>;
  /** Filter by outgoingRelations */
  outgoingRelations?: InputMaybe<RelationListFilterInput>;
  /** Filters for RelationPartners which are part of a Project's component graph */
  partOfProject?: InputMaybe<Scalars['ID']['input']>;
  /** Filters for AffectedByIssues which are related to a Trackable */
  relatedTo?: InputMaybe<Scalars['ID']['input']>;
};

/** Filter used to filter InterfacePart */
export type InterfacePartFilterInput = {
  /** Filter by affectingIssues */
  affectingIssues?: InputMaybe<IssueListFilterInput>;
  /** Connects all subformulas via and */
  and?: InputMaybe<Array<InterfacePartFilterInput>>;
  /** Filter by description */
  description?: InputMaybe<StringFilterInput>;
  /** Filter by id */
  id?: InputMaybe<IdFilterInput>;
  /** Filter by includingIncomingRelations */
  includingIncomingRelations?: InputMaybe<RelationListFilterInput>;
  /** Filter by includingIntraComponentDependencyParticipants */
  includingIntraComponentDependencyParticipants?: InputMaybe<IntraComponentDependencyParticipantListFilterInput>;
  /** Filter by includingOutgoingRelations */
  includingOutgoingRelations?: InputMaybe<RelationListFilterInput>;
  /** Filter by name */
  name?: InputMaybe<StringFilterInput>;
  /** Negates the subformula */
  not?: InputMaybe<InterfacePartFilterInput>;
  /** Connects all subformulas via or */
  or?: InputMaybe<Array<InterfacePartFilterInput>>;
  /** Filters for nodes where the related node match this filter */
  partOf?: InputMaybe<InterfaceSpecificationVersionFilterInput>;
  /** Filters for AffectedByIssues which are related to a Trackable */
  relatedTo?: InputMaybe<Scalars['ID']['input']>;
  /** Filters for nodes where the related node match this filter */
  template?: InputMaybe<InterfacePartTemplateFilterInput>;
  /** Filter for templated fields with matching key and values. Entries are joined by AND */
  templatedFields?: InputMaybe<Array<InputMaybe<JsonFieldInput>>>;
};

/** Input to create an InterfacePart */
export type InterfacePartInput = {
  /** The description of the NamedNode */
  description: Scalars['String']['input'];
  /** The name of the NamedNode, must not be blank */
  name: Scalars['String']['input'];
  /** Initial values for all templatedFields */
  templatedFields: Array<JsonFieldInput>;
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type InterfacePartListFilterInput = {
  /** Filters for nodes where all of the related nodes match this filter */
  all?: InputMaybe<InterfacePartFilterInput>;
  /** Filters for nodes where any of the related nodes match this filter */
  any?: InputMaybe<InterfacePartFilterInput>;
  /** Filters for nodes where none of the related nodes match this filter */
  none?: InputMaybe<InterfacePartFilterInput>;
};

/** Defines the order of a InterfacePart list */
export type InterfacePartOrder = {
  /** The direction to order by, defaults to ASC */
  direction?: InputMaybe<OrderDirection>;
  /** The field to order by, defaults to ID */
  field?: InputMaybe<InterfacePartOrderField>;
};

/** Fields a list of InterfacePart can be sorted by */
export enum InterfacePartOrderField {
  /** Order by id */
  Id = 'ID',
  /** Order by name */
  Name = 'NAME',
  /** Order by template_id */
  TemplateId = 'TEMPLATE_ID',
  /** Order by template_name */
  TemplateName = 'TEMPLATE_NAME'
}

/** Filter used to filter InterfacePartTemplate */
export type InterfacePartTemplateFilterInput = {
  /** Connects all subformulas via and */
  and?: InputMaybe<Array<InterfacePartTemplateFilterInput>>;
  /** Filter by description */
  description?: InputMaybe<StringFilterInput>;
  /** Filter by id */
  id?: InputMaybe<IdFilterInput>;
  /** Filter by name */
  name?: InputMaybe<StringFilterInput>;
  /** Negates the subformula */
  not?: InputMaybe<InterfacePartTemplateFilterInput>;
  /** Connects all subformulas via or */
  or?: InputMaybe<Array<InterfacePartTemplateFilterInput>>;
};

/** Filter used to filter InterfaceSpecificationDerivationCondition */
export type InterfaceSpecificationDerivationConditionFilterInput = {
  /** Connects all subformulas via and */
  and?: InputMaybe<Array<InterfaceSpecificationDerivationConditionFilterInput>>;
  /** Filter by derivableInterfaceSpecifications */
  derivableInterfaceSpecifications?: InputMaybe<InterfaceSpecificationTemplateListFilterInput>;
  /** Filter by derivesInvisibleDerived */
  derivesInvisibleDerived?: InputMaybe<BooleanFilterInput>;
  /** Filter by derivesInvisibleSelfDefined */
  derivesInvisibleSelfDefined?: InputMaybe<BooleanFilterInput>;
  /** Filter by derivesVisibleDerived */
  derivesVisibleDerived?: InputMaybe<BooleanFilterInput>;
  /** Filter by derivesVisibleSelfDefined */
  derivesVisibleSelfDefined?: InputMaybe<BooleanFilterInput>;
  /** Filter by id */
  id?: InputMaybe<IdFilterInput>;
  /** Filter by isInvisibleDerived */
  isInvisibleDerived?: InputMaybe<BooleanFilterInput>;
  /** Filter by isVisibleDerived */
  isVisibleDerived?: InputMaybe<BooleanFilterInput>;
  /** Negates the subformula */
  not?: InputMaybe<InterfaceSpecificationDerivationConditionFilterInput>;
  /** Connects all subformulas via or */
  or?: InputMaybe<Array<InterfaceSpecificationDerivationConditionFilterInput>>;
  /** Filters for nodes where the related node match this filter */
  partOf?: InputMaybe<RelationConditionFilterInput>;
};

/** Input to create a InterfaceSpecificationDerivationCondition */
export type InterfaceSpecificationDerivationConditionInput = {
  /** The ids of the InterfaceSpecifications this can derive */
  derivableInterfaceSpecifications: Array<Scalars['ID']['input']>;
  /** If true, invisible derived InterfaceSpecifications are derived */
  derivesInvisibleDerived: Scalars['Boolean']['input'];
  /** If true, invisible self-defined InterfaceSpecifications are derived */
  derivesInvisibleSelfDefined: Scalars['Boolean']['input'];
  /** If true, visible derived InterfaceSpecifications are derived */
  derivesVisibleDerived: Scalars['Boolean']['input'];
  /** If true, visible self-defined InterfaceSpecifications are derived */
  derivesVisibleSelfDefined: Scalars['Boolean']['input'];
  /** If true InterfaceSpecifications are invisible derived */
  isInvisibleDerived: Scalars['Boolean']['input'];
  /** If true InterfaceSpecifications are visible derived */
  isVisibleDerived: Scalars['Boolean']['input'];
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type InterfaceSpecificationDerivationConditionListFilterInput = {
  /** Filters for nodes where all of the related nodes match this filter */
  all?: InputMaybe<InterfaceSpecificationDerivationConditionFilterInput>;
  /** Filters for nodes where any of the related nodes match this filter */
  any?: InputMaybe<InterfaceSpecificationDerivationConditionFilterInput>;
  /** Filters for nodes where none of the related nodes match this filter */
  none?: InputMaybe<InterfaceSpecificationDerivationConditionFilterInput>;
};

/** Defines the order of a InterfaceSpecificationDerivationCondition list */
export type InterfaceSpecificationDerivationConditionOrder = {
  /** The direction to order by, defaults to ASC */
  direction?: InputMaybe<OrderDirection>;
  /** The field to order by, defaults to ID */
  field?: InputMaybe<InterfaceSpecificationDerivationConditionOrderField>;
};

/** Fields a list of InterfaceSpecificationDerivationCondition can be sorted by */
export enum InterfaceSpecificationDerivationConditionOrderField {
  /** Order by id */
  Id = 'ID'
}

/** Filter used to filter InterfaceSpecification */
export type InterfaceSpecificationFilterInput = {
  /** Filter by affectingIssues */
  affectingIssues?: InputMaybe<IssueListFilterInput>;
  /** Connects all subformulas via and */
  and?: InputMaybe<Array<InterfaceSpecificationFilterInput>>;
  /** Filters for nodes where the related node match this filter */
  component?: InputMaybe<ComponentFilterInput>;
  /** Filter by description */
  description?: InputMaybe<StringFilterInput>;
  /** Filter by id */
  id?: InputMaybe<IdFilterInput>;
  /** Filter by name */
  name?: InputMaybe<StringFilterInput>;
  /** Negates the subformula */
  not?: InputMaybe<InterfaceSpecificationFilterInput>;
  /** Connects all subformulas via or */
  or?: InputMaybe<Array<InterfaceSpecificationFilterInput>>;
  /** Filters for AffectedByIssues which are related to a Trackable */
  relatedTo?: InputMaybe<Scalars['ID']['input']>;
  /** Filters for nodes where the related node match this filter */
  template?: InputMaybe<InterfaceSpecificationTemplateFilterInput>;
  /** Filter for templated fields with matching key and values. Entries are joined by AND */
  templatedFields?: InputMaybe<Array<InputMaybe<JsonFieldInput>>>;
  /** Filter by versions */
  versions?: InputMaybe<InterfaceSpecificationVersionListFilterInput>;
};

/** Input to create an InterfaceSpecification */
export type InterfaceSpecificationInput = {
  /** The description of the NamedNode */
  description: Scalars['String']['input'];
  /** The name of the NamedNode, must not be blank */
  name: Scalars['String']['input'];
  /** The template of the created InterfaceSpecification */
  template: Scalars['ID']['input'];
  /** Initial values for all templatedFields */
  templatedFields: Array<JsonFieldInput>;
  /** Initial versions of the InterfaceSpecification */
  versions?: InputMaybe<Array<InterfaceSpecificationVersionInput>>;
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type InterfaceSpecificationListFilterInput = {
  /** Filters for nodes where all of the related nodes match this filter */
  all?: InputMaybe<InterfaceSpecificationFilterInput>;
  /** Filters for nodes where any of the related nodes match this filter */
  any?: InputMaybe<InterfaceSpecificationFilterInput>;
  /** Filters for nodes where none of the related nodes match this filter */
  none?: InputMaybe<InterfaceSpecificationFilterInput>;
};

/** Defines the order of a InterfaceSpecification list */
export type InterfaceSpecificationOrder = {
  /** The direction to order by, defaults to ASC */
  direction?: InputMaybe<OrderDirection>;
  /** The field to order by, defaults to ID */
  field?: InputMaybe<InterfaceSpecificationOrderField>;
};

/** Fields a list of InterfaceSpecification can be sorted by */
export enum InterfaceSpecificationOrderField {
  /** Order by id */
  Id = 'ID',
  /** Order by name */
  Name = 'NAME',
  /** Order by template_id */
  TemplateId = 'TEMPLATE_ID',
  /** Order by template_name */
  TemplateName = 'TEMPLATE_NAME'
}

/** Filter used to filter InterfaceSpecificationTemplate */
export type InterfaceSpecificationTemplateFilterInput = {
  /** Connects all subformulas via and */
  and?: InputMaybe<Array<InterfaceSpecificationTemplateFilterInput>>;
  /** Filter by canBeInvisibleOnComponents */
  canBeInvisibleOnComponents?: InputMaybe<ComponentTemplateListFilterInput>;
  /** Filter by canBeVisibleOnComponents */
  canBeVisibleOnComponents?: InputMaybe<ComponentTemplateListFilterInput>;
  /** Filter by derivableBy */
  derivableBy?: InputMaybe<InterfaceSpecificationDerivationConditionListFilterInput>;
  /** Filter by description */
  description?: InputMaybe<StringFilterInput>;
  /** Filter by extendedBy */
  extendedBy?: InputMaybe<InterfaceSpecificationTemplateListFilterInput>;
  /** Filter by extends */
  extends?: InputMaybe<InterfaceSpecificationTemplateListFilterInput>;
  /** Filter by id */
  id?: InputMaybe<IdFilterInput>;
  /** Filter by isDeprecated */
  isDeprecated?: InputMaybe<BooleanFilterInput>;
  /** Filter by name */
  name?: InputMaybe<StringFilterInput>;
  /** Negates the subformula */
  not?: InputMaybe<InterfaceSpecificationTemplateFilterInput>;
  /** Connects all subformulas via or */
  or?: InputMaybe<Array<InterfaceSpecificationTemplateFilterInput>>;
  /** Filter by possibleEndOfRelations */
  possibleEndOfRelations?: InputMaybe<RelationConditionListFilterInput>;
  /** Filter by possibleStartOfRelations */
  possibleStartOfRelations?: InputMaybe<RelationConditionListFilterInput>;
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type InterfaceSpecificationTemplateListFilterInput = {
  /** Filters for nodes where all of the related nodes match this filter */
  all?: InputMaybe<InterfaceSpecificationTemplateFilterInput>;
  /** Filters for nodes where any of the related nodes match this filter */
  any?: InputMaybe<InterfaceSpecificationTemplateFilterInput>;
  /** Filters for nodes where none of the related nodes match this filter */
  none?: InputMaybe<InterfaceSpecificationTemplateFilterInput>;
};

/** Defines the order of a InterfaceSpecificationTemplate list */
export type InterfaceSpecificationTemplateOrder = {
  /** The direction to order by, defaults to ASC */
  direction?: InputMaybe<OrderDirection>;
  /** The field to order by, defaults to ID */
  field?: InputMaybe<InterfaceSpecificationTemplateOrderField>;
};

/** Fields a list of InterfaceSpecificationTemplate can be sorted by */
export enum InterfaceSpecificationTemplateOrderField {
  /** Order by id */
  Id = 'ID',
  /** Order by name */
  Name = 'NAME'
}

/** Filter used to filter InterfaceSpecificationVersion */
export type InterfaceSpecificationVersionFilterInput = {
  /** Filter by affectingIssues */
  affectingIssues?: InputMaybe<IssueListFilterInput>;
  /** Connects all subformulas via and */
  and?: InputMaybe<Array<InterfaceSpecificationVersionFilterInput>>;
  /** Filter by id */
  id?: InputMaybe<IdFilterInput>;
  /** Filter by interfaceDefinitions */
  interfaceDefinitions?: InputMaybe<InterfaceDefinitionListFilterInput>;
  /** Filters for nodes where the related node match this filter */
  interfaceSpecification?: InputMaybe<InterfaceSpecificationFilterInput>;
  /** Negates the subformula */
  not?: InputMaybe<InterfaceSpecificationVersionFilterInput>;
  /** Connects all subformulas via or */
  or?: InputMaybe<Array<InterfaceSpecificationVersionFilterInput>>;
  /** Filter by parts */
  parts?: InputMaybe<InterfacePartListFilterInput>;
  /** Filters for AffectedByIssues which are related to a Trackable */
  relatedTo?: InputMaybe<Scalars['ID']['input']>;
  /** Filters for nodes where the related node match this filter */
  template?: InputMaybe<InterfaceSpecificationVersionTemplateFilterInput>;
  /** Filter for templated fields with matching key and values. Entries are joined by AND */
  templatedFields?: InputMaybe<Array<InputMaybe<JsonFieldInput>>>;
  /** Filter by version */
  version?: InputMaybe<StringFilterInput>;
};

/** Input to create an InterfaceSpecificationVersion */
export type InterfaceSpecificationVersionInput = {
  /** Initial InterfaceParts */
  parts?: InputMaybe<Array<InterfacePartInput>>;
  /** The tags of the created InterfaceSpecificationVersion */
  tags: Array<Scalars['String']['input']>;
  /** Initial values for all templatedFields */
  templatedFields: Array<JsonFieldInput>;
  /** The version of the created InterfaceSpecificationVersion */
  version: Scalars['String']['input'];
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type InterfaceSpecificationVersionListFilterInput = {
  /** Filters for nodes where all of the related nodes match this filter */
  all?: InputMaybe<InterfaceSpecificationVersionFilterInput>;
  /** Filters for nodes where any of the related nodes match this filter */
  any?: InputMaybe<InterfaceSpecificationVersionFilterInput>;
  /** Filters for nodes where none of the related nodes match this filter */
  none?: InputMaybe<InterfaceSpecificationVersionFilterInput>;
};

/** Defines the order of a InterfaceSpecificationVersion list */
export type InterfaceSpecificationVersionOrder = {
  /** The direction to order by, defaults to ASC */
  direction?: InputMaybe<OrderDirection>;
  /** The field to order by, defaults to ID */
  field?: InputMaybe<InterfaceSpecificationVersionOrderField>;
};

/** Fields a list of InterfaceSpecificationVersion can be sorted by */
export enum InterfaceSpecificationVersionOrderField {
  /** Order by id */
  Id = 'ID',
  /** Order by template_id */
  TemplateId = 'TEMPLATE_ID',
  /** Order by template_name */
  TemplateName = 'TEMPLATE_NAME',
  /** Order by version */
  Version = 'VERSION'
}

/** Filter used to filter InterfaceSpecificationVersionTemplate */
export type InterfaceSpecificationVersionTemplateFilterInput = {
  /** Connects all subformulas via and */
  and?: InputMaybe<Array<InterfaceSpecificationVersionTemplateFilterInput>>;
  /** Filter by description */
  description?: InputMaybe<StringFilterInput>;
  /** Filter by id */
  id?: InputMaybe<IdFilterInput>;
  /** Filter by name */
  name?: InputMaybe<StringFilterInput>;
  /** Negates the subformula */
  not?: InputMaybe<InterfaceSpecificationVersionTemplateFilterInput>;
  /** Connects all subformulas via or */
  or?: InputMaybe<Array<InterfaceSpecificationVersionTemplateFilterInput>>;
};

/** Filter used to filter IntraComponentDependencyParticipant */
export type IntraComponentDependencyParticipantFilterInput = {
  /** Connects all subformulas via and */
  and?: InputMaybe<Array<IntraComponentDependencyParticipantFilterInput>>;
  /** Filter by id */
  id?: InputMaybe<IdFilterInput>;
  /** Filter by includedParts */
  includedParts?: InputMaybe<InterfacePartListFilterInput>;
  /** Filters for nodes where the related node match this filter */
  interface?: InputMaybe<InterfaceFilterInput>;
  /** Negates the subformula */
  not?: InputMaybe<IntraComponentDependencyParticipantFilterInput>;
  /** Connects all subformulas via or */
  or?: InputMaybe<Array<IntraComponentDependencyParticipantFilterInput>>;
  /** Filters for nodes where the related node match this filter */
  usedAsIncomingAt?: InputMaybe<IntraComponentDependencySpecificationFilterInput>;
  /** Filters for nodes where the related node match this filter */
  usedAsOutgoingAt?: InputMaybe<IntraComponentDependencySpecificationFilterInput>;
};

/** Input to create a IntraComponentDependencyParticipant */
export type IntraComponentDependencyParticipantInput = {
  /** The ids of includedParts, must all be activeParts on the InterfaceSpecificationVersion associated with `interface` */
  includedParts?: InputMaybe<Array<Scalars['ID']['input']>>;
  /**
   * The id of the Interface, must be an Interface on the ComponentVersion the
   *         IntraComponentDependencySpecification this is part of refers to
   *
   */
  interface: Scalars['ID']['input'];
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type IntraComponentDependencyParticipantListFilterInput = {
  /** Filters for nodes where all of the related nodes match this filter */
  all?: InputMaybe<IntraComponentDependencyParticipantFilterInput>;
  /** Filters for nodes where any of the related nodes match this filter */
  any?: InputMaybe<IntraComponentDependencyParticipantFilterInput>;
  /** Filters for nodes where none of the related nodes match this filter */
  none?: InputMaybe<IntraComponentDependencyParticipantFilterInput>;
};

/** Defines the order of a IntraComponentDependencyParticipant list */
export type IntraComponentDependencyParticipantOrder = {
  /** The direction to order by, defaults to ASC */
  direction?: InputMaybe<OrderDirection>;
  /** The field to order by, defaults to ID */
  field?: InputMaybe<IntraComponentDependencyParticipantOrderField>;
};

/** Fields a list of IntraComponentDependencyParticipant can be sorted by */
export enum IntraComponentDependencyParticipantOrderField {
  /** Order by id */
  Id = 'ID'
}

/** Filter used to filter IntraComponentDependencySpecification */
export type IntraComponentDependencySpecificationFilterInput = {
  /** Connects all subformulas via and */
  and?: InputMaybe<Array<IntraComponentDependencySpecificationFilterInput>>;
  /** Filters for nodes where the related node match this filter */
  componentVersion?: InputMaybe<ComponentVersionFilterInput>;
  /** Filter by description */
  description?: InputMaybe<StringFilterInput>;
  /** Filter by id */
  id?: InputMaybe<IdFilterInput>;
  /** Filter by incomingParticipants */
  incomingParticipants?: InputMaybe<IntraComponentDependencyParticipantListFilterInput>;
  /** Filter by name */
  name?: InputMaybe<StringFilterInput>;
  /** Negates the subformula */
  not?: InputMaybe<IntraComponentDependencySpecificationFilterInput>;
  /** Connects all subformulas via or */
  or?: InputMaybe<Array<IntraComponentDependencySpecificationFilterInput>>;
  /** Filter by outgoingParticipants */
  outgoingParticipants?: InputMaybe<IntraComponentDependencyParticipantListFilterInput>;
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type IntraComponentDependencySpecificationListFilterInput = {
  /** Filters for nodes where all of the related nodes match this filter */
  all?: InputMaybe<IntraComponentDependencySpecificationFilterInput>;
  /** Filters for nodes where any of the related nodes match this filter */
  any?: InputMaybe<IntraComponentDependencySpecificationFilterInput>;
  /** Filters for nodes where none of the related nodes match this filter */
  none?: InputMaybe<IntraComponentDependencySpecificationFilterInput>;
};

/** Defines the order of a IntraComponentDependencySpecification list */
export type IntraComponentDependencySpecificationOrder = {
  /** The direction to order by, defaults to ASC */
  direction?: InputMaybe<OrderDirection>;
  /** The field to order by, defaults to ID */
  field?: InputMaybe<IntraComponentDependencySpecificationOrderField>;
};

/** Fields a list of IntraComponentDependencySpecification can be sorted by */
export enum IntraComponentDependencySpecificationOrderField {
  /** Order by id */
  Id = 'ID',
  /** Order by name */
  Name = 'NAME'
}

/** Filter used to filter IssueComment */
export type IssueCommentFilterInput = {
  /** Connects all subformulas via and */
  and?: InputMaybe<Array<IssueCommentFilterInput>>;
  /** Filter by answeredBy */
  answeredBy?: InputMaybe<IssueCommentListFilterInput>;
  /** Filters for nodes where the related node match this filter */
  answers?: InputMaybe<CommentFilterInput>;
  /** Filter by bodyLastEditedAt */
  bodyLastEditedAt?: InputMaybe<DateTimeFilterInput>;
  /** Filters for nodes where the related node match this filter */
  bodyLastEditedBy?: InputMaybe<UserFilterInput>;
  /** Filter by createdAt */
  createdAt?: InputMaybe<DateTimeFilterInput>;
  /** Filters for nodes where the related node match this filter */
  createdBy?: InputMaybe<UserFilterInput>;
  /** Filter by id */
  id?: InputMaybe<IdFilterInput>;
  /** Filter by isCommentDeleted */
  isCommentDeleted?: InputMaybe<BooleanFilterInput>;
  /** Filters for nodes where the related node match this filter */
  issue?: InputMaybe<IssueFilterInput>;
  /** Filter by lastModifiedAt */
  lastModifiedAt?: InputMaybe<DateTimeFilterInput>;
  /** Filters for nodes where the related node match this filter */
  lastModifiedBy?: InputMaybe<UserFilterInput>;
  /** Negates the subformula */
  not?: InputMaybe<IssueCommentFilterInput>;
  /** Connects all subformulas via or */
  or?: InputMaybe<Array<IssueCommentFilterInput>>;
  /** Filters for nodes where the related node match this filter */
  parentItem?: InputMaybe<ParentTimelineItemFilterInput>;
  /** Filter by referencedArtefacts */
  referencedArtefacts?: InputMaybe<ArtefactListFilterInput>;
  /** Filter for specific timeline items. Entries are joined by OR */
  timelineItemTypes?: InputMaybe<Array<TimelineItemType>>;
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type IssueCommentListFilterInput = {
  /** Filters for nodes where all of the related nodes match this filter */
  all?: InputMaybe<IssueCommentFilterInput>;
  /** Filters for nodes where any of the related nodes match this filter */
  any?: InputMaybe<IssueCommentFilterInput>;
  /** Filters for nodes where none of the related nodes match this filter */
  none?: InputMaybe<IssueCommentFilterInput>;
};

/** Defines the order of a IssueComment list */
export type IssueCommentOrder = {
  /** The direction to order by, defaults to ASC */
  direction?: InputMaybe<OrderDirection>;
  /** The field to order by, defaults to ID */
  field?: InputMaybe<IssueCommentOrderField>;
};

/** Fields a list of IssueComment can be sorted by */
export enum IssueCommentOrderField {
  /** Order by bodyLastEditedAt */
  BodyLastEditedAt = 'BODY_LAST_EDITED_AT',
  /** Order by createdAt */
  CreatedAt = 'CREATED_AT',
  /** Order by id */
  Id = 'ID',
  /** Order by lastModifiedAt */
  LastModifiedAt = 'LAST_MODIFIED_AT'
}

/** Filter used to filter Issue */
export type IssueFilterInput = {
  /** Filter by affects */
  affects?: InputMaybe<AffectedByIssueListFilterInput>;
  /** Filter by aggregatedBy */
  aggregatedBy?: InputMaybe<AggregatedIssueListFilterInput>;
  /** Connects all subformulas via and */
  and?: InputMaybe<Array<IssueFilterInput>>;
  /** Filter by artefacts */
  artefacts?: InputMaybe<ArtefactListFilterInput>;
  /** Filter by assignments */
  assignments?: InputMaybe<AssignmentListFilterInput>;
  /** Filters for nodes where the related node match this filter */
  body?: InputMaybe<BodyFilterInput>;
  /** Filter by createdAt */
  createdAt?: InputMaybe<DateTimeFilterInput>;
  /** Filters for nodes where the related node match this filter */
  createdBy?: InputMaybe<UserFilterInput>;
  /** Filter by dueDate */
  dueDate?: InputMaybe<NullableDateTimeFilterInput>;
  /** Filter by estimatedTime */
  estimatedTime?: InputMaybe<NullableDurationFilterInputFilterInput>;
  /** Filter by id */
  id?: InputMaybe<IdFilterInput>;
  /** Filter by imsIssues */
  imsIssues?: InputMaybe<ImsIssueListFilterInput>;
  /** Filter by incomingRelations */
  incomingRelations?: InputMaybe<IssueRelationListFilterInput>;
  /** Filter by issueComments */
  issueComments?: InputMaybe<IssueCommentListFilterInput>;
  /** Filter by labels */
  labels?: InputMaybe<LabelListFilterInput>;
  /** Filter by lastModifiedAt */
  lastModifiedAt?: InputMaybe<DateTimeFilterInput>;
  /** Filters for nodes where the related node match this filter */
  lastModifiedBy?: InputMaybe<UserFilterInput>;
  /** Filter by lastUpdatedAt */
  lastUpdatedAt?: InputMaybe<DateTimeFilterInput>;
  /** Negates the subformula */
  not?: InputMaybe<IssueFilterInput>;
  /** Connects all subformulas via or */
  or?: InputMaybe<Array<IssueFilterInput>>;
  /** Filter by outgoingRelations */
  outgoingRelations?: InputMaybe<IssueRelationListFilterInput>;
  /** Filter by participants */
  participants?: InputMaybe<UserListFilterInput>;
  /** Filter by pinnedOn */
  pinnedOn?: InputMaybe<TrackableListFilterInput>;
  /** Filters for nodes where the related node match this filter */
  priority?: InputMaybe<IssuePriorityFilterInput>;
  /** Filter by spentTime */
  spentTime?: InputMaybe<NullableDurationFilterInputFilterInput>;
  /** Filter by startDate */
  startDate?: InputMaybe<NullableDateTimeFilterInput>;
  /** Filters for nodes where the related node match this filter */
  state?: InputMaybe<IssueStateFilterInput>;
  /** Filters for nodes where the related node match this filter */
  template?: InputMaybe<IssueTemplateFilterInput>;
  /** Filter for templated fields with matching key and values. Entries are joined by AND */
  templatedFields?: InputMaybe<Array<InputMaybe<JsonFieldInput>>>;
  /** Filter by timelineItems */
  timelineItems?: InputMaybe<TimelineItemListFilterInput>;
  /** Filter by title */
  title?: InputMaybe<StringFilterInput>;
  /** Filter by trackables */
  trackables?: InputMaybe<TrackableListFilterInput>;
  /** Filters for nodes where the related node match this filter */
  type?: InputMaybe<IssueTypeFilterInput>;
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type IssueListFilterInput = {
  /** Filters for nodes where all of the related nodes match this filter */
  all?: InputMaybe<IssueFilterInput>;
  /** Filters for nodes where any of the related nodes match this filter */
  any?: InputMaybe<IssueFilterInput>;
  /** Filters for nodes where none of the related nodes match this filter */
  none?: InputMaybe<IssueFilterInput>;
};

/** Defines the order of a Issue list */
export type IssueOrder = {
  /** The direction to order by, defaults to ASC */
  direction?: InputMaybe<OrderDirection>;
  /** The field to order by, defaults to ID */
  field?: InputMaybe<IssueOrderField>;
};

/** Fields a list of Issue can be sorted by */
export enum IssueOrderField {
  /** Order by createdAt */
  CreatedAt = 'CREATED_AT',
  /** Order by dueDate */
  DueDate = 'DUE_DATE',
  /** Order by estimatedTime */
  EstimatedTime = 'ESTIMATED_TIME',
  /** Order by id */
  Id = 'ID',
  /** Order by lastModifiedAt */
  LastModifiedAt = 'LAST_MODIFIED_AT',
  /** Order by lastUpdatedAt */
  LastUpdatedAt = 'LAST_UPDATED_AT',
  /** Order by priority_id */
  PriorityId = 'PRIORITY_ID',
  /** Order by priority_name */
  PriorityName = 'PRIORITY_NAME',
  /** Order by priority_value */
  PriorityValue = 'PRIORITY_VALUE',
  /** Order by spentTime */
  SpentTime = 'SPENT_TIME',
  /** Order by startDate */
  StartDate = 'START_DATE',
  /** Order by state_id */
  StateId = 'STATE_ID',
  /** Order by state_isOpen */
  StateIsOpen = 'STATE_IS_OPEN',
  /** Order by state_name */
  StateName = 'STATE_NAME',
  /** Order by template_id */
  TemplateId = 'TEMPLATE_ID',
  /** Order by template_name */
  TemplateName = 'TEMPLATE_NAME',
  /** Order by title */
  Title = 'TITLE',
  /** Order by type_id */
  TypeId = 'TYPE_ID',
  /** Order by type_name */
  TypeName = 'TYPE_NAME'
}

/** Filter used to filter IssuePriority */
export type IssuePriorityFilterInput = {
  /** Connects all subformulas via and */
  and?: InputMaybe<Array<IssuePriorityFilterInput>>;
  /** Filter by description */
  description?: InputMaybe<StringFilterInput>;
  /** Filter by id */
  id?: InputMaybe<IdFilterInput>;
  /** Filter by name */
  name?: InputMaybe<StringFilterInput>;
  /** Negates the subformula */
  not?: InputMaybe<IssuePriorityFilterInput>;
  /** Connects all subformulas via or */
  or?: InputMaybe<Array<IssuePriorityFilterInput>>;
  /** Filter by partOf */
  partOf?: InputMaybe<IssueTemplateListFilterInput>;
  /** Filter by prioritizedIssues */
  prioritizedIssues?: InputMaybe<IssueListFilterInput>;
  /** Filter by value */
  value?: InputMaybe<FloatFilterInput>;
};

/** Input to create an IssuePriority */
export type IssuePriorityInput = {
  /** The description of the NamedNode */
  description: Scalars['String']['input'];
  /** The name of the NamedNode, must not be blank */
  name: Scalars['String']['input'];
  /** The value of the created IssuePriority, used to compare/order different IssuePriorities */
  value: Scalars['Float']['input'];
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type IssuePriorityListFilterInput = {
  /** Filters for nodes where all of the related nodes match this filter */
  all?: InputMaybe<IssuePriorityFilterInput>;
  /** Filters for nodes where any of the related nodes match this filter */
  any?: InputMaybe<IssuePriorityFilterInput>;
  /** Filters for nodes where none of the related nodes match this filter */
  none?: InputMaybe<IssuePriorityFilterInput>;
};

/** Defines the order of a IssuePriority list */
export type IssuePriorityOrder = {
  /** The direction to order by, defaults to ASC */
  direction?: InputMaybe<OrderDirection>;
  /** The field to order by, defaults to ID */
  field?: InputMaybe<IssuePriorityOrderField>;
};

/** Fields a list of IssuePriority can be sorted by */
export enum IssuePriorityOrderField {
  /** Order by id */
  Id = 'ID',
  /** Order by name */
  Name = 'NAME',
  /** Order by value */
  Value = 'VALUE'
}

/** Filter used to filter IssueRelation */
export type IssueRelationFilterInput = {
  /** Filter by aggregatedBy */
  aggregatedBy?: InputMaybe<AggregatedIssueRelationListFilterInput>;
  /** Connects all subformulas via and */
  and?: InputMaybe<Array<IssueRelationFilterInput>>;
  /** Filter by createdAt */
  createdAt?: InputMaybe<DateTimeFilterInput>;
  /** Filters for nodes where the related node match this filter */
  createdBy?: InputMaybe<UserFilterInput>;
  /** Filter by id */
  id?: InputMaybe<IdFilterInput>;
  /** Filters for nodes where the related node match this filter */
  initialType?: InputMaybe<IssueRelationTypeFilterInput>;
  /** Filters for nodes where the related node match this filter */
  issue?: InputMaybe<IssueFilterInput>;
  /** Filter by lastModifiedAt */
  lastModifiedAt?: InputMaybe<DateTimeFilterInput>;
  /** Filters for nodes where the related node match this filter */
  lastModifiedBy?: InputMaybe<UserFilterInput>;
  /** Negates the subformula */
  not?: InputMaybe<IssueRelationFilterInput>;
  /** Connects all subformulas via or */
  or?: InputMaybe<Array<IssueRelationFilterInput>>;
  /** Filters for nodes where the related node match this filter */
  parentItem?: InputMaybe<ParentTimelineItemFilterInput>;
  /** Filters for nodes where the related node match this filter */
  relatedIssue?: InputMaybe<IssueFilterInput>;
  /** Filter for specific timeline items. Entries are joined by OR */
  timelineItemTypes?: InputMaybe<Array<TimelineItemType>>;
  /** Filters for nodes where the related node match this filter */
  type?: InputMaybe<IssueRelationTypeFilterInput>;
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type IssueRelationListFilterInput = {
  /** Filters for nodes where all of the related nodes match this filter */
  all?: InputMaybe<IssueRelationFilterInput>;
  /** Filters for nodes where any of the related nodes match this filter */
  any?: InputMaybe<IssueRelationFilterInput>;
  /** Filters for nodes where none of the related nodes match this filter */
  none?: InputMaybe<IssueRelationFilterInput>;
};

/** Defines the order of a IssueRelation list */
export type IssueRelationOrder = {
  /** The direction to order by, defaults to ASC */
  direction?: InputMaybe<OrderDirection>;
  /** The field to order by, defaults to ID */
  field?: InputMaybe<IssueRelationOrderField>;
};

/** Fields a list of IssueRelation can be sorted by */
export enum IssueRelationOrderField {
  /** Order by createdAt */
  CreatedAt = 'CREATED_AT',
  /** Order by id */
  Id = 'ID',
  /** Order by lastModifiedAt */
  LastModifiedAt = 'LAST_MODIFIED_AT'
}

/** Filter used to filter IssueRelationType */
export type IssueRelationTypeFilterInput = {
  /** Connects all subformulas via and */
  and?: InputMaybe<Array<IssueRelationTypeFilterInput>>;
  /** Filter by description */
  description?: InputMaybe<StringFilterInput>;
  /** Filter by id */
  id?: InputMaybe<IdFilterInput>;
  /** Filter by inverseName */
  inverseName?: InputMaybe<StringFilterInput>;
  /** Filter by name */
  name?: InputMaybe<StringFilterInput>;
  /** Negates the subformula */
  not?: InputMaybe<IssueRelationTypeFilterInput>;
  /** Connects all subformulas via or */
  or?: InputMaybe<Array<IssueRelationTypeFilterInput>>;
  /** Filter by partOf */
  partOf?: InputMaybe<IssueTemplateListFilterInput>;
  /** Filter by relationsWithType */
  relationsWithType?: InputMaybe<IssueRelationListFilterInput>;
};

/** Input to create an IssueRelationType */
export type IssueRelationTypeInput = {
  /** The description of the NamedNode */
  description: Scalars['String']['input'];
  /** The inverse name of the IssueRelationType, must not be blank */
  inverseName: Scalars['String']['input'];
  /** The name of the NamedNode, must not be blank */
  name: Scalars['String']['input'];
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type IssueRelationTypeListFilterInput = {
  /** Filters for nodes where all of the related nodes match this filter */
  all?: InputMaybe<IssueRelationTypeFilterInput>;
  /** Filters for nodes where any of the related nodes match this filter */
  any?: InputMaybe<IssueRelationTypeFilterInput>;
  /** Filters for nodes where none of the related nodes match this filter */
  none?: InputMaybe<IssueRelationTypeFilterInput>;
};

/** Defines the order of a IssueRelationType list */
export type IssueRelationTypeOrder = {
  /** The direction to order by, defaults to ASC */
  direction?: InputMaybe<OrderDirection>;
  /** The field to order by, defaults to ID */
  field?: InputMaybe<IssueRelationTypeOrderField>;
};

/** Fields a list of IssueRelationType can be sorted by */
export enum IssueRelationTypeOrderField {
  /** Order by id */
  Id = 'ID',
  /** Order by inverseName */
  InverseName = 'INVERSE_NAME',
  /** Order by name */
  Name = 'NAME'
}

/** Filter used to filter IssueState */
export type IssueStateFilterInput = {
  /** Connects all subformulas via and */
  and?: InputMaybe<Array<IssueStateFilterInput>>;
  /** Filter by description */
  description?: InputMaybe<StringFilterInput>;
  /** Filter by id */
  id?: InputMaybe<IdFilterInput>;
  /** Filter by isOpen */
  isOpen?: InputMaybe<BooleanFilterInput>;
  /** Filter by issuesWithState */
  issuesWithState?: InputMaybe<IssueListFilterInput>;
  /** Filter by name */
  name?: InputMaybe<StringFilterInput>;
  /** Negates the subformula */
  not?: InputMaybe<IssueStateFilterInput>;
  /** Connects all subformulas via or */
  or?: InputMaybe<Array<IssueStateFilterInput>>;
  /** Filter by partOf */
  partOf?: InputMaybe<IssueTemplateListFilterInput>;
};

/** Input to create an IssueState */
export type IssueStateInput = {
  /** The description of the NamedNode */
  description: Scalars['String']['input'];
  /** The value for the isOpen field of the created IssueState */
  isOpen: Scalars['Boolean']['input'];
  /** The name of the NamedNode, must not be blank */
  name: Scalars['String']['input'];
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type IssueStateListFilterInput = {
  /** Filters for nodes where all of the related nodes match this filter */
  all?: InputMaybe<IssueStateFilterInput>;
  /** Filters for nodes where any of the related nodes match this filter */
  any?: InputMaybe<IssueStateFilterInput>;
  /** Filters for nodes where none of the related nodes match this filter */
  none?: InputMaybe<IssueStateFilterInput>;
};

/** Defines the order of a IssueState list */
export type IssueStateOrder = {
  /** The direction to order by, defaults to ASC */
  direction?: InputMaybe<OrderDirection>;
  /** The field to order by, defaults to ID */
  field?: InputMaybe<IssueStateOrderField>;
};

/** Fields a list of IssueState can be sorted by */
export enum IssueStateOrderField {
  /** Order by id */
  Id = 'ID',
  /** Order by isOpen */
  IsOpen = 'IS_OPEN',
  /** Order by name */
  Name = 'NAME'
}

/** Filter used to filter IssueTemplate */
export type IssueTemplateFilterInput = {
  /** Connects all subformulas via and */
  and?: InputMaybe<Array<IssueTemplateFilterInput>>;
  /** Filter by assignmentTypes */
  assignmentTypes?: InputMaybe<AssignmentTypeListFilterInput>;
  /** Filter by description */
  description?: InputMaybe<StringFilterInput>;
  /** Filter by extendedBy */
  extendedBy?: InputMaybe<IssueTemplateListFilterInput>;
  /** Filter by extends */
  extends?: InputMaybe<IssueTemplateListFilterInput>;
  /** Filter by id */
  id?: InputMaybe<IdFilterInput>;
  /** Filter by isDeprecated */
  isDeprecated?: InputMaybe<BooleanFilterInput>;
  /** Filter by issuePriorities */
  issuePriorities?: InputMaybe<IssuePriorityListFilterInput>;
  /** Filter by issueStates */
  issueStates?: InputMaybe<IssueStateListFilterInput>;
  /** Filter by issueTypes */
  issueTypes?: InputMaybe<IssueTypeListFilterInput>;
  /** Filter by name */
  name?: InputMaybe<StringFilterInput>;
  /** Negates the subformula */
  not?: InputMaybe<IssueTemplateFilterInput>;
  /** Connects all subformulas via or */
  or?: InputMaybe<Array<IssueTemplateFilterInput>>;
  /** Filter by relationTypes */
  relationTypes?: InputMaybe<IssueRelationTypeListFilterInput>;
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type IssueTemplateListFilterInput = {
  /** Filters for nodes where all of the related nodes match this filter */
  all?: InputMaybe<IssueTemplateFilterInput>;
  /** Filters for nodes where any of the related nodes match this filter */
  any?: InputMaybe<IssueTemplateFilterInput>;
  /** Filters for nodes where none of the related nodes match this filter */
  none?: InputMaybe<IssueTemplateFilterInput>;
};

/** Defines the order of a IssueTemplate list */
export type IssueTemplateOrder = {
  /** The direction to order by, defaults to ASC */
  direction?: InputMaybe<OrderDirection>;
  /** The field to order by, defaults to ID */
  field?: InputMaybe<IssueTemplateOrderField>;
};

/** Fields a list of IssueTemplate can be sorted by */
export enum IssueTemplateOrderField {
  /** Order by id */
  Id = 'ID',
  /** Order by name */
  Name = 'NAME'
}

/** Filter used to filter IssueType */
export type IssueTypeFilterInput = {
  /** Connects all subformulas via and */
  and?: InputMaybe<Array<IssueTypeFilterInput>>;
  /** Filter by description */
  description?: InputMaybe<StringFilterInput>;
  /** Filter by id */
  id?: InputMaybe<IdFilterInput>;
  /** Filter by issuesWithType */
  issuesWithType?: InputMaybe<IssueListFilterInput>;
  /** Filter by name */
  name?: InputMaybe<StringFilterInput>;
  /** Negates the subformula */
  not?: InputMaybe<IssueTypeFilterInput>;
  /** Connects all subformulas via or */
  or?: InputMaybe<Array<IssueTypeFilterInput>>;
  /** Filter by partOf */
  partOf?: InputMaybe<IssueTemplateListFilterInput>;
};

/** Input to create an IssueType */
export type IssueTypeInput = {
  /** The description of the NamedNode */
  description: Scalars['String']['input'];
  /** A path that is used as the icon for issues. Used with a 0 0 100 100 viewBox. No stroke, only fill. */
  iconPath: Scalars['String']['input'];
  /** The name of the NamedNode, must not be blank */
  name: Scalars['String']['input'];
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type IssueTypeListFilterInput = {
  /** Filters for nodes where all of the related nodes match this filter */
  all?: InputMaybe<IssueTypeFilterInput>;
  /** Filters for nodes where any of the related nodes match this filter */
  any?: InputMaybe<IssueTypeFilterInput>;
  /** Filters for nodes where none of the related nodes match this filter */
  none?: InputMaybe<IssueTypeFilterInput>;
};

/** Defines the order of a IssueType list */
export type IssueTypeOrder = {
  /** The direction to order by, defaults to ASC */
  direction?: InputMaybe<OrderDirection>;
  /** The field to order by, defaults to ID */
  field?: InputMaybe<IssueTypeOrderField>;
};

/** Fields a list of IssueType can be sorted by */
export enum IssueTypeOrderField {
  /** Order by id */
  Id = 'ID',
  /** Order by name */
  Name = 'NAME'
}

/** Input set update the value of a JSON field, like an extension field or a templated field. */
export type JsonFieldInput = {
  /** The name of the field */
  name: Scalars['String']['input'];
  /** The new value of the field */
  value?: InputMaybe<Scalars['JSON']['input']>;
};

/** Filter used to filter Label */
export type LabelFilterInput = {
  /** Connects all subformulas via and */
  and?: InputMaybe<Array<LabelFilterInput>>;
  /** Filter by color */
  color?: InputMaybe<StringFilterInput>;
  /** Filter by createdAt */
  createdAt?: InputMaybe<DateTimeFilterInput>;
  /** Filters for nodes where the related node match this filter */
  createdBy?: InputMaybe<UserFilterInput>;
  /** Filter by description */
  description?: InputMaybe<StringFilterInput>;
  /** Filter by id */
  id?: InputMaybe<IdFilterInput>;
  /** Filter by issues */
  issues?: InputMaybe<IssueListFilterInput>;
  /** Filter by lastModifiedAt */
  lastModifiedAt?: InputMaybe<DateTimeFilterInput>;
  /** Filters for nodes where the related node match this filter */
  lastModifiedBy?: InputMaybe<UserFilterInput>;
  /** Filter by name */
  name?: InputMaybe<StringFilterInput>;
  /** Negates the subformula */
  not?: InputMaybe<LabelFilterInput>;
  /** Connects all subformulas via or */
  or?: InputMaybe<Array<LabelFilterInput>>;
  /** Filter by trackables */
  trackables?: InputMaybe<TrackableListFilterInput>;
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type LabelListFilterInput = {
  /** Filters for nodes where all of the related nodes match this filter */
  all?: InputMaybe<LabelFilterInput>;
  /** Filters for nodes where any of the related nodes match this filter */
  any?: InputMaybe<LabelFilterInput>;
  /** Filters for nodes where none of the related nodes match this filter */
  none?: InputMaybe<LabelFilterInput>;
};

/** Defines the order of a Label list */
export type LabelOrder = {
  /** The direction to order by, defaults to ASC */
  direction?: InputMaybe<OrderDirection>;
  /** The field to order by, defaults to ID */
  field?: InputMaybe<LabelOrderField>;
};

/** Fields a list of Label can be sorted by */
export enum LabelOrderField {
  /** Order by color */
  Color = 'COLOR',
  /** Order by createdAt */
  CreatedAt = 'CREATED_AT',
  /** Order by id */
  Id = 'ID',
  /** Order by lastModifiedAt */
  LastModifiedAt = 'LAST_MODIFIED_AT',
  /** Order by name */
  Name = 'NAME'
}

/** Type of a Relation marker */
export enum MarkerType {
  /** A regular arrow */
  Arrow = 'ARROW',
  /** A circle */
  Circle = 'CIRCLE',
  /** A diamond */
  Diamond = 'DIAMOND',
  /** A filled circle */
  FilledCircle = 'FILLED_CIRCLE',
  /** A filled diamond */
  FilledDiamond = 'FILLED_DIAMOND',
  /** A filled triangle */
  FilledTriangle = 'FILLED_TRIANGLE',
  /** A triangle */
  Triangle = 'TRIANGLE'
}

/** Filter used to filter NamedAffectedByIssue */
export type NamedAffectedByIssueFilterInput = {
  /** Filter by affectingIssues */
  affectingIssues?: InputMaybe<IssueListFilterInput>;
  /** Connects all subformulas via and */
  and?: InputMaybe<Array<NamedAffectedByIssueFilterInput>>;
  /** Filter by description */
  description?: InputMaybe<StringFilterInput>;
  /** Filter by id */
  id?: InputMaybe<IdFilterInput>;
  /** Filter for nodes of type Component */
  isComponentAnd?: InputMaybe<ComponentFilterInput>;
  /** Filter for nodes of type InterfacePart */
  isInterfacePartAnd?: InputMaybe<InterfacePartFilterInput>;
  /** Filter for nodes of type InterfaceSpecification */
  isInterfaceSpecificationAnd?: InputMaybe<InterfaceSpecificationFilterInput>;
  /** Filter for nodes of type Project */
  isProjectAnd?: InputMaybe<ProjectFilterInput>;
  /** Filter for nodes of type Trackable */
  isTrackableAnd?: InputMaybe<TrackableFilterInput>;
  /** Filter by name */
  name?: InputMaybe<StringFilterInput>;
  /** Negates the subformula */
  not?: InputMaybe<NamedAffectedByIssueFilterInput>;
  /** Connects all subformulas via or */
  or?: InputMaybe<Array<NamedAffectedByIssueFilterInput>>;
  /** Filters for AffectedByIssues which are related to a Trackable */
  relatedTo?: InputMaybe<Scalars['ID']['input']>;
};

/** Filter used to filter NamedAuditedNode */
export type NamedAuditedNodeFilterInput = {
  /** Connects all subformulas via and */
  and?: InputMaybe<Array<NamedAuditedNodeFilterInput>>;
  /** Filter by createdAt */
  createdAt?: InputMaybe<DateTimeFilterInput>;
  /** Filters for nodes where the related node match this filter */
  createdBy?: InputMaybe<UserFilterInput>;
  /** Filter by description */
  description?: InputMaybe<StringFilterInput>;
  /** Filter by id */
  id?: InputMaybe<IdFilterInput>;
  /** Filter for nodes of type Label */
  isLabelAnd?: InputMaybe<LabelFilterInput>;
  /** Filter by lastModifiedAt */
  lastModifiedAt?: InputMaybe<DateTimeFilterInput>;
  /** Filters for nodes where the related node match this filter */
  lastModifiedBy?: InputMaybe<UserFilterInput>;
  /** Filter by name */
  name?: InputMaybe<StringFilterInput>;
  /** Negates the subformula */
  not?: InputMaybe<NamedAuditedNodeFilterInput>;
  /** Connects all subformulas via or */
  or?: InputMaybe<Array<NamedAuditedNodeFilterInput>>;
};

export type NodePermissionFilterEntry = {
  /** The node where the user must have the permission */
  node: Scalars['ID']['input'];
  /** The permission the user must have on the node */
  permission: AllPermissionEntry;
};

/** Filter used to filter NodePermission */
export type NodePermissionFilterInput = {
  /** Filter by allUsers */
  allUsers?: InputMaybe<BooleanFilterInput>;
  /** Connects all subformulas via and */
  and?: InputMaybe<Array<NodePermissionFilterInput>>;
  /** Filter by description */
  description?: InputMaybe<StringFilterInput>;
  /** Filter by id */
  id?: InputMaybe<IdFilterInput>;
  /** Filter for nodes of type ComponentPermission */
  isComponentPermissionAnd?: InputMaybe<ComponentPermissionFilterInput>;
  /** Filter for nodes of type IMSPermission */
  isIMSPermissionAnd?: InputMaybe<ImsPermissionFilterInput>;
  /** Filter for nodes of type ProjectPermission */
  isProjectPermissionAnd?: InputMaybe<ProjectPermissionFilterInput>;
  /** Filter for nodes of type TrackablePermission */
  isTrackablePermissionAnd?: InputMaybe<TrackablePermissionFilterInput>;
  /** Filter by name */
  name?: InputMaybe<StringFilterInput>;
  /** Negates the subformula */
  not?: InputMaybe<NodePermissionFilterInput>;
  /** Connects all subformulas via or */
  or?: InputMaybe<Array<NodePermissionFilterInput>>;
  /** Filter by users */
  users?: InputMaybe<GropiusUserListFilterInput>;
};

/** Filter which can be used to filter for Nodes with a specific DateTime field */
export type NullableDateTimeFilterInput = {
  /** Matches values which are equal to the provided value */
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  /** Matches values which are greater than the provided value */
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Matches values which are greater than or equal to the provided value */
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Matches values which are equal to any of the provided values */
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  /** If true, matches only null values, if false, matches only non-null values */
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches values which are lesser than the provided value */
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Matches values which are lesser than or equal to the provided value */
  lte?: InputMaybe<Scalars['DateTime']['input']>;
};

/** Filter which can be used to filter for Nodes with a specific Duration field */
export type NullableDurationFilterInputFilterInput = {
  /** Matches values which are equal to the provided value */
  eq?: InputMaybe<Scalars['Duration']['input']>;
  /** Matches values which are greater than the provided value */
  gt?: InputMaybe<Scalars['Duration']['input']>;
  /** Matches values which are greater than or equal to the provided value */
  gte?: InputMaybe<Scalars['Duration']['input']>;
  /** Matches values which are equal to any of the provided values */
  in?: InputMaybe<Array<Scalars['Duration']['input']>>;
  /** If true, matches only null values, if false, matches only non-null values */
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches values which are lesser than the provided value */
  lt?: InputMaybe<Scalars['Duration']['input']>;
  /** Matches values which are lesser than or equal to the provided value */
  lte?: InputMaybe<Scalars['Duration']['input']>;
};

/** Filter which can be used to filter for Nodes with a specific Int field */
export type NullableIntFilterInput = {
  /** Matches values which are equal to the provided value */
  eq?: InputMaybe<Scalars['Int']['input']>;
  /** Matches values which are greater than the provided value */
  gt?: InputMaybe<Scalars['Int']['input']>;
  /** Matches values which are greater than or equal to the provided value */
  gte?: InputMaybe<Scalars['Int']['input']>;
  /** Matches values which are equal to any of the provided values */
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  /** If true, matches only null values, if false, matches only non-null values */
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches values which are lesser than the provided value */
  lt?: InputMaybe<Scalars['Int']['input']>;
  /** Matches values which are lesser than or equal to the provided value */
  lte?: InputMaybe<Scalars['Int']['input']>;
};

/** Filter which can be used to filter for Nodes with a specific String field */
export type NullableStringFilterInput = {
  /** Matches Strings which contain the provided value */
  contains?: InputMaybe<Scalars['String']['input']>;
  /** Matches Strings which end with the provided value */
  endsWith?: InputMaybe<Scalars['String']['input']>;
  /** Matches values which are equal to the provided value */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Matches values which are greater than the provided value */
  gt?: InputMaybe<Scalars['String']['input']>;
  /** Matches values which are greater than or equal to the provided value */
  gte?: InputMaybe<Scalars['String']['input']>;
  /** Matches values which are equal to any of the provided values */
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** If true, matches only null values, if false, matches only non-null values */
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches values which are lesser than the provided value */
  lt?: InputMaybe<Scalars['String']['input']>;
  /** Matches values which are lesser than or equal to the provided value */
  lte?: InputMaybe<Scalars['String']['input']>;
  /** Matches Strings using the provided RegEx */
  matches?: InputMaybe<Scalars['String']['input']>;
  /** Matches Strings which start with the provided value */
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

/** Possible direction in which a list of nodes can be ordered */
export enum OrderDirection {
  /** Ascending */
  Asc = 'ASC',
  /** Descending */
  Desc = 'DESC'
}

/** Filter used to filter OutgoingRelationTypeChangedEvent */
export type OutgoingRelationTypeChangedEventFilterInput = {
  /** Connects all subformulas via and */
  and?: InputMaybe<Array<OutgoingRelationTypeChangedEventFilterInput>>;
  /** Filter by createdAt */
  createdAt?: InputMaybe<DateTimeFilterInput>;
  /** Filters for nodes where the related node match this filter */
  createdBy?: InputMaybe<UserFilterInput>;
  /** Filter by id */
  id?: InputMaybe<IdFilterInput>;
  /** Filters for nodes where the related node match this filter */
  issue?: InputMaybe<IssueFilterInput>;
  /** Filters for nodes where the related node match this filter */
  issueRelation?: InputMaybe<IssueRelationFilterInput>;
  /** Filter by lastModifiedAt */
  lastModifiedAt?: InputMaybe<DateTimeFilterInput>;
  /** Filters for nodes where the related node match this filter */
  lastModifiedBy?: InputMaybe<UserFilterInput>;
  /** Filters for nodes where the related node match this filter */
  newType?: InputMaybe<IssueRelationTypeFilterInput>;
  /** Negates the subformula */
  not?: InputMaybe<OutgoingRelationTypeChangedEventFilterInput>;
  /** Filters for nodes where the related node match this filter */
  oldType?: InputMaybe<IssueRelationTypeFilterInput>;
  /** Connects all subformulas via or */
  or?: InputMaybe<Array<OutgoingRelationTypeChangedEventFilterInput>>;
  /** Filters for nodes where the related node match this filter */
  parentItem?: InputMaybe<ParentTimelineItemFilterInput>;
  /** Filter for specific timeline items. Entries are joined by OR */
  timelineItemTypes?: InputMaybe<Array<TimelineItemType>>;
};

/** Filter used to filter ParentTimelineItem */
export type ParentTimelineItemFilterInput = {
  /** Connects all subformulas via and */
  and?: InputMaybe<Array<ParentTimelineItemFilterInput>>;
  /** Filter by childItems */
  childItems?: InputMaybe<TimelineItemListFilterInput>;
  /** Filter by createdAt */
  createdAt?: InputMaybe<DateTimeFilterInput>;
  /** Filters for nodes where the related node match this filter */
  createdBy?: InputMaybe<UserFilterInput>;
  /** Filter by id */
  id?: InputMaybe<IdFilterInput>;
  /** Filter for nodes of type RemovedFromTrackableEvent */
  isRemovedFromTrackableEventAnd?: InputMaybe<RemovedFromTrackableEventFilterInput>;
  /** Filter for nodes of type TemplateChangedEvent */
  isTemplateChangedEventAnd?: InputMaybe<TemplateChangedEventFilterInput>;
  /** Filters for nodes where the related node match this filter */
  issue?: InputMaybe<IssueFilterInput>;
  /** Filter by lastModifiedAt */
  lastModifiedAt?: InputMaybe<DateTimeFilterInput>;
  /** Filters for nodes where the related node match this filter */
  lastModifiedBy?: InputMaybe<UserFilterInput>;
  /** Negates the subformula */
  not?: InputMaybe<ParentTimelineItemFilterInput>;
  /** Connects all subformulas via or */
  or?: InputMaybe<Array<ParentTimelineItemFilterInput>>;
  /** Filters for nodes where the related node match this filter */
  parentItem?: InputMaybe<ParentTimelineItemFilterInput>;
  /** Filter for specific timeline items. Entries are joined by OR */
  timelineItemTypes?: InputMaybe<Array<TimelineItemType>>;
};

/** Permission entry enum type. */
export enum PermissionEntry {
  /** Allows to create new Components. */
  CanCreateComponents = 'CAN_CREATE_COMPONENTS',
  /** Allows to create new IMSs. */
  CanCreateImss = 'CAN_CREATE_IMSS',
  /** Allows to create new Projects. */
  CanCreateProjects = 'CAN_CREATE_PROJECTS',
  /** Allows to create new Templates. */
  CanCreateTemplates = 'CAN_CREATE_TEMPLATES'
}

/** A point in a 2D coordinate system */
export type PointInput = {
  /** The x coordinate of the point */
  x: Scalars['Int']['input'];
  /** The y coordinate of the point */
  y: Scalars['Int']['input'];
};

/** Filter used to filter PriorityChangedEvent */
export type PriorityChangedEventFilterInput = {
  /** Connects all subformulas via and */
  and?: InputMaybe<Array<PriorityChangedEventFilterInput>>;
  /** Filter by createdAt */
  createdAt?: InputMaybe<DateTimeFilterInput>;
  /** Filters for nodes where the related node match this filter */
  createdBy?: InputMaybe<UserFilterInput>;
  /** Filter by id */
  id?: InputMaybe<IdFilterInput>;
  /** Filters for nodes where the related node match this filter */
  issue?: InputMaybe<IssueFilterInput>;
  /** Filter by lastModifiedAt */
  lastModifiedAt?: InputMaybe<DateTimeFilterInput>;
  /** Filters for nodes where the related node match this filter */
  lastModifiedBy?: InputMaybe<UserFilterInput>;
  /** Filters for nodes where the related node match this filter */
  newPriority?: InputMaybe<IssuePriorityFilterInput>;
  /** Negates the subformula */
  not?: InputMaybe<PriorityChangedEventFilterInput>;
  /** Filters for nodes where the related node match this filter */
  oldPriority?: InputMaybe<IssuePriorityFilterInput>;
  /** Connects all subformulas via or */
  or?: InputMaybe<Array<PriorityChangedEventFilterInput>>;
  /** Filters for nodes where the related node match this filter */
  parentItem?: InputMaybe<ParentTimelineItemFilterInput>;
  /** Filter for specific timeline items. Entries are joined by OR */
  timelineItemTypes?: InputMaybe<Array<TimelineItemType>>;
};

/** Filter used to filter Project */
export type ProjectFilterInput = {
  /** Filter by affectingIssues */
  affectingIssues?: InputMaybe<IssueListFilterInput>;
  /** Connects all subformulas via and */
  and?: InputMaybe<Array<ProjectFilterInput>>;
  /** Filter by artefacts */
  artefacts?: InputMaybe<ArtefactListFilterInput>;
  /** Filter by components */
  components?: InputMaybe<ComponentVersionListFilterInput>;
  /** Filters for nodes where the related node match this filter */
  defaultView?: InputMaybe<ViewFilterInput>;
  /** Filter by description */
  description?: InputMaybe<StringFilterInput>;
  /** Filter by id */
  id?: InputMaybe<IdFilterInput>;
  /** Filter by issues */
  issues?: InputMaybe<IssueListFilterInput>;
  /** Filter by labels */
  labels?: InputMaybe<LabelListFilterInput>;
  /** Filter by name */
  name?: InputMaybe<StringFilterInput>;
  /** Negates the subformula */
  not?: InputMaybe<ProjectFilterInput>;
  /** Connects all subformulas via or */
  or?: InputMaybe<Array<ProjectFilterInput>>;
  /** Filter by permissions */
  permissions?: InputMaybe<ProjectPermissionListFilterInput>;
  /** Filter by pinnedIssues */
  pinnedIssues?: InputMaybe<IssueListFilterInput>;
  /** Filters for AffectedByIssues which are related to a Trackable */
  relatedTo?: InputMaybe<Scalars['ID']['input']>;
  /** Filter by relationLayouts */
  relationLayouts?: InputMaybe<RelationLayoutListFilterInput>;
  /** Filter by relationPartnerLayouts */
  relationPartnerLayouts?: InputMaybe<RelationPartnerLayoutListFilterInput>;
  /** Filter by repositoryURL */
  repositoryURL?: InputMaybe<NullableStringFilterInput>;
  /** Filter by syncsTo */
  syncsTo?: InputMaybe<ImsProjectListFilterInput>;
  /** Filter by views */
  views?: InputMaybe<ViewListFilterInput>;
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type ProjectListFilterInput = {
  /** Filters for nodes where all of the related nodes match this filter */
  all?: InputMaybe<ProjectFilterInput>;
  /** Filters for nodes where any of the related nodes match this filter */
  any?: InputMaybe<ProjectFilterInput>;
  /** Filters for nodes where none of the related nodes match this filter */
  none?: InputMaybe<ProjectFilterInput>;
};

/** Defines the order of a Project list */
export type ProjectOrder = {
  /** The direction to order by, defaults to ASC */
  direction?: InputMaybe<OrderDirection>;
  /** The field to order by, defaults to ID */
  field?: InputMaybe<ProjectOrderField>;
};

/** Fields a list of Project can be sorted by */
export enum ProjectOrderField {
  /** Order by id */
  Id = 'ID',
  /** Order by name */
  Name = 'NAME'
}

/** ProjectPermission entry enum type. */
export enum ProjectPermissionEntry {
  /** Grants all other permissions on the Node except READ. */
  Admin = 'ADMIN',
  /**
   * Allows affecting entities part of this Trackable with any Issues.
   * Affectable entitites include
   *   - the Trackable itself
   *   - in case the Trackable is a Component
   *     - InterfaceSpecifications, their InterfaceSpecificationVersions and their InterfaceParts of the Component (not inherited ones)
   *     - Interfaces on the Component
   *     - ComponentVersions of the Component
   */
  AffectEntitiesWithIssues = 'AFFECT_ENTITIES_WITH_ISSUES',
  /**
   * Allows to create Comments on Issues on this Trackable.
   * Also allows editing of your own Comments.
   */
  Comment = 'COMMENT',
  /**
   * Allows to create new Issues on the Trackable.
   * This includes adding Issues from other Trackables.
   */
  CreateIssues = 'CREATE_ISSUES',
  /** Allows adding Issues on this Trackable to other Trackables. */
  ExportIssues = 'EXPORT_ISSUES',
  /** Allows adding Labels on this Trackable to other Trackables. */
  ExportLabels = 'EXPORT_LABELS',
  /** Allows to add, remove, and update Artefacts on this Trackable. */
  ManageArtefacts = 'MANAGE_ARTEFACTS',
  /** Allows to add / remove ComponentVersions to / from this Project. */
  ManageComponents = 'MANAGE_COMPONENTS',
  /**
   * Allows to add, remove, and update IMSProjects on this Trackable.
   * Note: for adding, `IMSPermissionEntry.SYNC_TRACKABLES` is required additionally
   */
  ManageIms = 'MANAGE_IMS',
  /**
   * Allows to manage issues.
   * This includes `CREATE_ISSUES` and `COMMENT`.
   * This does NOT include `LINK_TO_ISSUES` and `LINK_FROM_ISSUES`.
   * Additionaly includes
   *   - change the Template
   *   - add / remove Labels
   *   - add / remove Artefacts
   *   - change any field on the Issue (title, startDate, dueDate, ...)
   *   - change templated fields
   * In contrast to `MODERATOR`, this does not allow editing / removing Comments of other users
   */
  ManageIssues = 'MANAGE_ISSUES',
  /**
   * Allows to add, remove, and update Labels on this Trackable.
   * Also allows to delete a Label, but only if it is allowed on all Trackable the Label is on.
   */
  ManageLabels = 'MANAGE_LABELS',
  /** Allows to manage the views of this Project. */
  ManageViews = 'MANAGE_VIEWS',
  /**
   * Allows to moderate Issues on this Trackable.
   * This allows everything `MANAGE_ISSUES` allows.
   * Additionally, it allows editing and deleting Comments of other Users
   */
  Moderator = 'MODERATOR',
  /**
   * Allows to read the Node (obtain it via the API) and to read certain related Nodes.
   * See documentation for specific Node for the specific conditions.
   */
  Read = 'READ'
}

/** Filter used to filter ProjectPermission */
export type ProjectPermissionFilterInput = {
  /** Filter by allUsers */
  allUsers?: InputMaybe<BooleanFilterInput>;
  /** Connects all subformulas via and */
  and?: InputMaybe<Array<ProjectPermissionFilterInput>>;
  /** Filter by description */
  description?: InputMaybe<StringFilterInput>;
  /** Filter by id */
  id?: InputMaybe<IdFilterInput>;
  /** Filter by name */
  name?: InputMaybe<StringFilterInput>;
  /** Filter by nodesWithPermission */
  nodesWithPermission?: InputMaybe<ProjectListFilterInput>;
  /** Negates the subformula */
  not?: InputMaybe<ProjectPermissionFilterInput>;
  /** Connects all subformulas via or */
  or?: InputMaybe<Array<ProjectPermissionFilterInput>>;
  /** Filter by users */
  users?: InputMaybe<GropiusUserListFilterInput>;
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type ProjectPermissionListFilterInput = {
  /** Filters for nodes where all of the related nodes match this filter */
  all?: InputMaybe<ProjectPermissionFilterInput>;
  /** Filters for nodes where any of the related nodes match this filter */
  any?: InputMaybe<ProjectPermissionFilterInput>;
  /** Filters for nodes where none of the related nodes match this filter */
  none?: InputMaybe<ProjectPermissionFilterInput>;
};

/** Defines the order of a ProjectPermission list */
export type ProjectPermissionOrder = {
  /** The direction to order by, defaults to ASC */
  direction?: InputMaybe<OrderDirection>;
  /** The field to order by, defaults to ID */
  field?: InputMaybe<ProjectPermissionOrderField>;
};

/** Fields a list of ProjectPermission can be sorted by */
export enum ProjectPermissionOrderField {
  /** Order by allUsers */
  AllUsers = 'ALL_USERS',
  /** Order by id */
  Id = 'ID',
  /** Order by name */
  Name = 'NAME'
}

/** Filter used to filter PublicTimelineItem */
export type PublicTimelineItemFilterInput = {
  /** Connects all subformulas via and */
  and?: InputMaybe<Array<PublicTimelineItemFilterInput>>;
  /** Filter by createdAt */
  createdAt?: InputMaybe<DateTimeFilterInput>;
  /** Filters for nodes where the related node match this filter */
  createdBy?: InputMaybe<UserFilterInput>;
  /** Filter by id */
  id?: InputMaybe<IdFilterInput>;
  /** Filter for nodes of type AbstractTypeChangedEvent */
  isAbstractTypeChangedEventAnd?: InputMaybe<AbstractTypeChangedEventFilterInput>;
  /** Filter for nodes of type AddedAffectedEntityEvent */
  isAddedAffectedEntityEventAnd?: InputMaybe<AddedAffectedEntityEventFilterInput>;
  /** Filter for nodes of type AddedArtefactEvent */
  isAddedArtefactEventAnd?: InputMaybe<AddedArtefactEventFilterInput>;
  /** Filter for nodes of type AddedLabelEvent */
  isAddedLabelEventAnd?: InputMaybe<AddedLabelEventFilterInput>;
  /** Filter for nodes of type AddedToPinnedIssuesEvent */
  isAddedToPinnedIssuesEventAnd?: InputMaybe<AddedToPinnedIssuesEventFilterInput>;
  /** Filter for nodes of type AddedToTrackableEvent */
  isAddedToTrackableEventAnd?: InputMaybe<AddedToTrackableEventFilterInput>;
  /** Filter for nodes of type Assignment */
  isAssignmentAnd?: InputMaybe<AssignmentFilterInput>;
  /** Filter for nodes of type AssignmentTypeChangedEvent */
  isAssignmentTypeChangedEventAnd?: InputMaybe<AssignmentTypeChangedEventFilterInput>;
  /** Filter for nodes of type Body */
  isBodyAnd?: InputMaybe<BodyFilterInput>;
  /** Filter for nodes of type Comment */
  isCommentAnd?: InputMaybe<CommentFilterInput>;
  /** Filter for nodes of type IncomingRelationTypeChangedEvent */
  isIncomingRelationTypeChangedEventAnd?: InputMaybe<IncomingRelationTypeChangedEventFilterInput>;
  /** Filter for nodes of type IssueComment */
  isIssueCommentAnd?: InputMaybe<IssueCommentFilterInput>;
  /** Filter for nodes of type IssueRelation */
  isIssueRelationAnd?: InputMaybe<IssueRelationFilterInput>;
  /** Filter for nodes of type OutgoingRelationTypeChangedEvent */
  isOutgoingRelationTypeChangedEventAnd?: InputMaybe<OutgoingRelationTypeChangedEventFilterInput>;
  /** Filter for nodes of type PriorityChangedEvent */
  isPriorityChangedEventAnd?: InputMaybe<PriorityChangedEventFilterInput>;
  /** Filter for nodes of type RelationTypeChangedEvent */
  isRelationTypeChangedEventAnd?: InputMaybe<RelationTypeChangedEventFilterInput>;
  /** Filter for nodes of type RemovedAffectedEntityEvent */
  isRemovedAffectedEntityEventAnd?: InputMaybe<RemovedAffectedEntityEventFilterInput>;
  /** Filter for nodes of type RemovedArtefactEvent */
  isRemovedArtefactEventAnd?: InputMaybe<RemovedArtefactEventFilterInput>;
  /** Filter for nodes of type RemovedAssignmentEvent */
  isRemovedAssignmentEventAnd?: InputMaybe<RemovedAssignmentEventFilterInput>;
  /** Filter for nodes of type RemovedFromPinnedIssuesEvent */
  isRemovedFromPinnedIssuesEventAnd?: InputMaybe<RemovedFromPinnedIssuesEventFilterInput>;
  /** Filter for nodes of type RemovedLabelEvent */
  isRemovedLabelEventAnd?: InputMaybe<RemovedLabelEventFilterInput>;
  /** Filter for nodes of type RemovedTemplatedFieldEvent */
  isRemovedTemplatedFieldEventAnd?: InputMaybe<RemovedTemplatedFieldEventFilterInput>;
  /** Filter for nodes of type StateChangedEvent */
  isStateChangedEventAnd?: InputMaybe<StateChangedEventFilterInput>;
  /** Filter for nodes of type TemplatedFieldChangedEvent */
  isTemplatedFieldChangedEventAnd?: InputMaybe<TemplatedFieldChangedEventFilterInput>;
  /** Filter for nodes of type TitleChangedEvent */
  isTitleChangedEventAnd?: InputMaybe<TitleChangedEventFilterInput>;
  /** Filter for nodes of type TypeChangedEvent */
  isTypeChangedEventAnd?: InputMaybe<TypeChangedEventFilterInput>;
  /** Filters for nodes where the related node match this filter */
  issue?: InputMaybe<IssueFilterInput>;
  /** Filter by lastModifiedAt */
  lastModifiedAt?: InputMaybe<DateTimeFilterInput>;
  /** Filters for nodes where the related node match this filter */
  lastModifiedBy?: InputMaybe<UserFilterInput>;
  /** Negates the subformula */
  not?: InputMaybe<PublicTimelineItemFilterInput>;
  /** Connects all subformulas via or */
  or?: InputMaybe<Array<PublicTimelineItemFilterInput>>;
  /** Filters for nodes where the related node match this filter */
  parentItem?: InputMaybe<ParentTimelineItemFilterInput>;
  /** Filter for specific timeline items. Entries are joined by OR */
  timelineItemTypes?: InputMaybe<Array<TimelineItemType>>;
};

/** Filter used to filter RelatedByIssueEvent */
export type RelatedByIssueEventFilterInput = {
  /** Connects all subformulas via and */
  and?: InputMaybe<Array<RelatedByIssueEventFilterInput>>;
  /** Filter by createdAt */
  createdAt?: InputMaybe<DateTimeFilterInput>;
  /** Filters for nodes where the related node match this filter */
  createdBy?: InputMaybe<UserFilterInput>;
  /** Filter by id */
  id?: InputMaybe<IdFilterInput>;
  /** Filters for nodes where the related node match this filter */
  issue?: InputMaybe<IssueFilterInput>;
  /** Filter by lastModifiedAt */
  lastModifiedAt?: InputMaybe<DateTimeFilterInput>;
  /** Filters for nodes where the related node match this filter */
  lastModifiedBy?: InputMaybe<UserFilterInput>;
  /** Negates the subformula */
  not?: InputMaybe<RelatedByIssueEventFilterInput>;
  /** Connects all subformulas via or */
  or?: InputMaybe<Array<RelatedByIssueEventFilterInput>>;
  /** Filters for nodes where the related node match this filter */
  parentItem?: InputMaybe<ParentTimelineItemFilterInput>;
  /** Filters for nodes where the related node match this filter */
  relation?: InputMaybe<IssueRelationFilterInput>;
  /** Filter for specific timeline items. Entries are joined by OR */
  timelineItemTypes?: InputMaybe<Array<TimelineItemType>>;
};

/** Filter used to filter RelationCondition */
export type RelationConditionFilterInput = {
  /** Connects all subformulas via and */
  and?: InputMaybe<Array<RelationConditionFilterInput>>;
  /** Filter by from */
  from?: InputMaybe<RelationPartnerTemplateListFilterInput>;
  /** Filter by id */
  id?: InputMaybe<IdFilterInput>;
  /** Filter by interfaceSpecificationDerivationConditions */
  interfaceSpecificationDerivationConditions?: InputMaybe<InterfaceSpecificationDerivationConditionListFilterInput>;
  /** Negates the subformula */
  not?: InputMaybe<RelationConditionFilterInput>;
  /** Connects all subformulas via or */
  or?: InputMaybe<Array<RelationConditionFilterInput>>;
  /** Filter by partOf */
  partOf?: InputMaybe<RelationTemplateListFilterInput>;
  /** Filter by to */
  to?: InputMaybe<RelationPartnerTemplateListFilterInput>;
};

/** Input to create a RelationCondition */
export type RelationConditionInput = {
  /** IDs of Templates of allowed start RelationPartners */
  from: Array<Scalars['ID']['input']>;
  /** Defines which InterfaceSpecifications are derived via the relation */
  interfaceSpecificationDerivationConditions: Array<InterfaceSpecificationDerivationConditionInput>;
  /** IDs of Templates of allowed end RelationPartners */
  to: Array<Scalars['ID']['input']>;
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type RelationConditionListFilterInput = {
  /** Filters for nodes where all of the related nodes match this filter */
  all?: InputMaybe<RelationConditionFilterInput>;
  /** Filters for nodes where any of the related nodes match this filter */
  any?: InputMaybe<RelationConditionFilterInput>;
  /** Filters for nodes where none of the related nodes match this filter */
  none?: InputMaybe<RelationConditionFilterInput>;
};

/** Defines the order of a RelationCondition list */
export type RelationConditionOrder = {
  /** The direction to order by, defaults to ASC */
  direction?: InputMaybe<OrderDirection>;
  /** The field to order by, defaults to ID */
  field?: InputMaybe<RelationConditionOrderField>;
};

/** Fields a list of RelationCondition can be sorted by */
export enum RelationConditionOrderField {
  /** Order by id */
  Id = 'ID'
}

/** Filter used to filter Relation */
export type RelationFilterInput = {
  /** Connects all subformulas via and */
  and?: InputMaybe<Array<RelationFilterInput>>;
  /** Filter by derivesInvisible */
  derivesInvisible?: InputMaybe<InterfaceDefinitionListFilterInput>;
  /** Filter by derivesVisible */
  derivesVisible?: InputMaybe<InterfaceDefinitionListFilterInput>;
  /** Filters for nodes where the related node match this filter */
  end?: InputMaybe<RelationPartnerFilterInput>;
  /** Filter by endParts */
  endParts?: InputMaybe<InterfacePartListFilterInput>;
  /** Filter by id */
  id?: InputMaybe<IdFilterInput>;
  /** Negates the subformula */
  not?: InputMaybe<RelationFilterInput>;
  /** Connects all subformulas via or */
  or?: InputMaybe<Array<RelationFilterInput>>;
  /** Filters for nodes where the related node match this filter */
  start?: InputMaybe<RelationPartnerFilterInput>;
  /** Filter by startParts */
  startParts?: InputMaybe<InterfacePartListFilterInput>;
  /** Filters for nodes where the related node match this filter */
  template?: InputMaybe<RelationTemplateFilterInput>;
  /** Filter for templated fields with matching key and values. Entries are joined by AND */
  templatedFields?: InputMaybe<Array<InputMaybe<JsonFieldInput>>>;
};

/** Filter used to filter RelationLayout */
export type RelationLayoutFilterInput = {
  /** Connects all subformulas via and */
  and?: InputMaybe<Array<RelationLayoutFilterInput>>;
  /** Filter by id */
  id?: InputMaybe<IdFilterInput>;
  /** Negates the subformula */
  not?: InputMaybe<RelationLayoutFilterInput>;
  /** Connects all subformulas via or */
  or?: InputMaybe<Array<RelationLayoutFilterInput>>;
  /** Filters for nodes where the related node match this filter */
  project?: InputMaybe<ProjectFilterInput>;
  /** Filters for nodes where the related node match this filter */
  relation?: InputMaybe<RelationFilterInput>;
  /** Filters for nodes where the related node match this filter */
  view?: InputMaybe<ViewFilterInput>;
};

/** Input which defines the layout of a Relation */
export type RelationLayoutInput = {
  /** List of intermediate points of the relation */
  points: Array<PointInput>;
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type RelationLayoutListFilterInput = {
  /** Filters for nodes where all of the related nodes match this filter */
  all?: InputMaybe<RelationLayoutFilterInput>;
  /** Filters for nodes where any of the related nodes match this filter */
  any?: InputMaybe<RelationLayoutFilterInput>;
  /** Filters for nodes where none of the related nodes match this filter */
  none?: InputMaybe<RelationLayoutFilterInput>;
};

/** Defines the order of a RelationLayout list */
export type RelationLayoutOrder = {
  /** The direction to order by, defaults to ASC */
  direction?: InputMaybe<OrderDirection>;
  /** The field to order by, defaults to ID */
  field?: InputMaybe<RelationLayoutOrderField>;
};

/** Fields a list of RelationLayout can be sorted by */
export enum RelationLayoutOrderField {
  /** Order by id */
  Id = 'ID'
}

/** Used to filter by a connection-based property. Fields are joined by AND */
export type RelationListFilterInput = {
  /** Filters for nodes where all of the related nodes match this filter */
  all?: InputMaybe<RelationFilterInput>;
  /** Filters for nodes where any of the related nodes match this filter */
  any?: InputMaybe<RelationFilterInput>;
  /** Filters for nodes where none of the related nodes match this filter */
  none?: InputMaybe<RelationFilterInput>;
};

/** Defines the order of a Relation list */
export type RelationOrder = {
  /** The direction to order by, defaults to ASC */
  direction?: InputMaybe<OrderDirection>;
  /** The field to order by, defaults to ID */
  field?: InputMaybe<RelationOrderField>;
};

/** Fields a list of Relation can be sorted by */
export enum RelationOrderField {
  /** Order by end_id */
  EndId = 'END_ID',
  /** Order by id */
  Id = 'ID',
  /** Order by start_id */
  StartId = 'START_ID',
  /** Order by template_id */
  TemplateId = 'TEMPLATE_ID',
  /** Order by template_name */
  TemplateName = 'TEMPLATE_NAME'
}

/** Filter used to filter RelationPartner */
export type RelationPartnerFilterInput = {
  /** Filter by affectingIssues */
  affectingIssues?: InputMaybe<IssueListFilterInput>;
  /** Filter by aggregatedIssues */
  aggregatedIssues?: InputMaybe<AggregatedIssueListFilterInput>;
  /** Connects all subformulas via and */
  and?: InputMaybe<Array<RelationPartnerFilterInput>>;
  /** Filter by id */
  id?: InputMaybe<IdFilterInput>;
  /** Filter by incomingRelations */
  incomingRelations?: InputMaybe<RelationListFilterInput>;
  /** Filter for nodes of type ComponentVersion */
  isComponentVersionAnd?: InputMaybe<ComponentVersionFilterInput>;
  /** Filter for nodes of type Interface */
  isInterfaceAnd?: InputMaybe<InterfaceFilterInput>;
  /** Negates the subformula */
  not?: InputMaybe<RelationPartnerFilterInput>;
  /** Connects all subformulas via or */
  or?: InputMaybe<Array<RelationPartnerFilterInput>>;
  /** Filter by outgoingRelations */
  outgoingRelations?: InputMaybe<RelationListFilterInput>;
  /** Filters for RelationPartners which are part of a Project's component graph */
  partOfProject?: InputMaybe<Scalars['ID']['input']>;
  /** Filters for AffectedByIssues which are related to a Trackable */
  relatedTo?: InputMaybe<Scalars['ID']['input']>;
};

/** Filter used to filter RelationPartnerLayout */
export type RelationPartnerLayoutFilterInput = {
  /** Connects all subformulas via and */
  and?: InputMaybe<Array<RelationPartnerLayoutFilterInput>>;
  /** Filter by id */
  id?: InputMaybe<IdFilterInput>;
  /** Negates the subformula */
  not?: InputMaybe<RelationPartnerLayoutFilterInput>;
  /** Connects all subformulas via or */
  or?: InputMaybe<Array<RelationPartnerLayoutFilterInput>>;
  /** Filters for nodes where the related node match this filter */
  project?: InputMaybe<ProjectFilterInput>;
  /** Filters for nodes where the related node match this filter */
  relationPartner?: InputMaybe<RelationPartnerFilterInput>;
  /** Filters for nodes where the related node match this filter */
  view?: InputMaybe<ViewFilterInput>;
};

/** Input which defines the layout of a RelationPartner */
export type RelationPartnerLayoutInput = {
  /** The position of the RelationPartner */
  pos: PointInput;
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type RelationPartnerLayoutListFilterInput = {
  /** Filters for nodes where all of the related nodes match this filter */
  all?: InputMaybe<RelationPartnerLayoutFilterInput>;
  /** Filters for nodes where any of the related nodes match this filter */
  any?: InputMaybe<RelationPartnerLayoutFilterInput>;
  /** Filters for nodes where none of the related nodes match this filter */
  none?: InputMaybe<RelationPartnerLayoutFilterInput>;
};

/** Defines the order of a RelationPartnerLayout list */
export type RelationPartnerLayoutOrder = {
  /** The direction to order by, defaults to ASC */
  direction?: InputMaybe<OrderDirection>;
  /** The field to order by, defaults to ID */
  field?: InputMaybe<RelationPartnerLayoutOrderField>;
};

/** Fields a list of RelationPartnerLayout can be sorted by */
export enum RelationPartnerLayoutOrderField {
  /** Order by id */
  Id = 'ID'
}

/** Filter used to filter RelationPartnerTemplate */
export type RelationPartnerTemplateFilterInput = {
  /** Connects all subformulas via and */
  and?: InputMaybe<Array<RelationPartnerTemplateFilterInput>>;
  /** Filter by description */
  description?: InputMaybe<StringFilterInput>;
  /** Filter by id */
  id?: InputMaybe<IdFilterInput>;
  /** Filter for nodes of type ComponentTemplate */
  isComponentTemplateAnd?: InputMaybe<ComponentTemplateFilterInput>;
  /** Filter by isDeprecated */
  isDeprecated?: InputMaybe<BooleanFilterInput>;
  /** Filter for nodes of type InterfaceSpecificationTemplate */
  isInterfaceSpecificationTemplateAnd?: InputMaybe<InterfaceSpecificationTemplateFilterInput>;
  /** Filter by name */
  name?: InputMaybe<StringFilterInput>;
  /** Negates the subformula */
  not?: InputMaybe<RelationPartnerTemplateFilterInput>;
  /** Connects all subformulas via or */
  or?: InputMaybe<Array<RelationPartnerTemplateFilterInput>>;
  /** Filter by possibleEndOfRelations */
  possibleEndOfRelations?: InputMaybe<RelationConditionListFilterInput>;
  /** Filter by possibleStartOfRelations */
  possibleStartOfRelations?: InputMaybe<RelationConditionListFilterInput>;
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type RelationPartnerTemplateListFilterInput = {
  /** Filters for nodes where all of the related nodes match this filter */
  all?: InputMaybe<RelationPartnerTemplateFilterInput>;
  /** Filters for nodes where any of the related nodes match this filter */
  any?: InputMaybe<RelationPartnerTemplateFilterInput>;
  /** Filters for nodes where none of the related nodes match this filter */
  none?: InputMaybe<RelationPartnerTemplateFilterInput>;
};

/** Defines the order of a RelationPartnerTemplate list */
export type RelationPartnerTemplateOrder = {
  /** The direction to order by, defaults to ASC */
  direction?: InputMaybe<OrderDirection>;
  /** The field to order by, defaults to ID */
  field?: InputMaybe<RelationPartnerTemplateOrderField>;
};

/** Fields a list of RelationPartnerTemplate can be sorted by */
export enum RelationPartnerTemplateOrderField {
  /** Order by id */
  Id = 'ID',
  /** Order by name */
  Name = 'NAME'
}

/** Filter used to filter RelationTemplate */
export type RelationTemplateFilterInput = {
  /** Connects all subformulas via and */
  and?: InputMaybe<Array<RelationTemplateFilterInput>>;
  /** Filter by description */
  description?: InputMaybe<StringFilterInput>;
  /** Filter by extendedBy */
  extendedBy?: InputMaybe<RelationTemplateListFilterInput>;
  /** Filter by extends */
  extends?: InputMaybe<RelationTemplateListFilterInput>;
  /** Filter by id */
  id?: InputMaybe<IdFilterInput>;
  /** Filter by isDeprecated */
  isDeprecated?: InputMaybe<BooleanFilterInput>;
  /** Filter by name */
  name?: InputMaybe<StringFilterInput>;
  /** Negates the subformula */
  not?: InputMaybe<RelationTemplateFilterInput>;
  /** Connects all subformulas via or */
  or?: InputMaybe<Array<RelationTemplateFilterInput>>;
  /** Filter by relationConditions */
  relationConditions?: InputMaybe<RelationConditionListFilterInput>;
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type RelationTemplateListFilterInput = {
  /** Filters for nodes where all of the related nodes match this filter */
  all?: InputMaybe<RelationTemplateFilterInput>;
  /** Filters for nodes where any of the related nodes match this filter */
  any?: InputMaybe<RelationTemplateFilterInput>;
  /** Filters for nodes where none of the related nodes match this filter */
  none?: InputMaybe<RelationTemplateFilterInput>;
};

/** Defines the order of a RelationTemplate list */
export type RelationTemplateOrder = {
  /** The direction to order by, defaults to ASC */
  direction?: InputMaybe<OrderDirection>;
  /** The field to order by, defaults to ID */
  field?: InputMaybe<RelationTemplateOrderField>;
};

/** Fields a list of RelationTemplate can be sorted by */
export enum RelationTemplateOrderField {
  /** Order by id */
  Id = 'ID',
  /** Order by name */
  Name = 'NAME'
}

/** Filter used to filter RelationTypeChangedEvent */
export type RelationTypeChangedEventFilterInput = {
  /** Connects all subformulas via and */
  and?: InputMaybe<Array<RelationTypeChangedEventFilterInput>>;
  /** Filter by createdAt */
  createdAt?: InputMaybe<DateTimeFilterInput>;
  /** Filters for nodes where the related node match this filter */
  createdBy?: InputMaybe<UserFilterInput>;
  /** Filter by id */
  id?: InputMaybe<IdFilterInput>;
  /** Filter for nodes of type IncomingRelationTypeChangedEvent */
  isIncomingRelationTypeChangedEventAnd?: InputMaybe<IncomingRelationTypeChangedEventFilterInput>;
  /** Filter for nodes of type OutgoingRelationTypeChangedEvent */
  isOutgoingRelationTypeChangedEventAnd?: InputMaybe<OutgoingRelationTypeChangedEventFilterInput>;
  /** Filters for nodes where the related node match this filter */
  issue?: InputMaybe<IssueFilterInput>;
  /** Filters for nodes where the related node match this filter */
  issueRelation?: InputMaybe<IssueRelationFilterInput>;
  /** Filter by lastModifiedAt */
  lastModifiedAt?: InputMaybe<DateTimeFilterInput>;
  /** Filters for nodes where the related node match this filter */
  lastModifiedBy?: InputMaybe<UserFilterInput>;
  /** Filters for nodes where the related node match this filter */
  newType?: InputMaybe<IssueRelationTypeFilterInput>;
  /** Negates the subformula */
  not?: InputMaybe<RelationTypeChangedEventFilterInput>;
  /** Filters for nodes where the related node match this filter */
  oldType?: InputMaybe<IssueRelationTypeFilterInput>;
  /** Connects all subformulas via or */
  or?: InputMaybe<Array<RelationTypeChangedEventFilterInput>>;
  /** Filters for nodes where the related node match this filter */
  parentItem?: InputMaybe<ParentTimelineItemFilterInput>;
  /** Filter for specific timeline items. Entries are joined by OR */
  timelineItemTypes?: InputMaybe<Array<TimelineItemType>>;
};

/** Input for the removeAffectedEntityFromIssue mutation */
export type RemoveAffectedEntityFromIssueInput = {
  /** The id of the AffectedByIssue which is no longer affected by the Issue */
  affectedEntity: Scalars['ID']['input'];
  /** The id of the Issue which no longer affects the entity */
  issue: Scalars['ID']['input'];
};

/** Input for the removeArtefactFromIssue mutation */
export type RemoveArtefactFromIssueInput = {
  /** The id of the Artefact to remove */
  artefact: Scalars['ID']['input'];
  /** The id of the Issue where to remove the Artefact */
  issue: Scalars['ID']['input'];
};

/** Input for the removeAssignment mutations */
export type RemoveAssignmentInput = {
  /** The id of the Assignment to remove */
  assignment: Scalars['ID']['input'];
};

/** Input for the removeComponentVersionFromProject mutation */
export type RemoveComponentVersionFromProjectInput = {
  /** The id of the ComponentVersion to remove */
  componentVersion: Scalars['ID']['input'];
  /** The id of the Project from which the ComponentVersion is removed */
  project: Scalars['ID']['input'];
};

/** Input for the removeInterfaceSpecificationVersionfromComponentVersion mutation */
export type RemoveInterfaceSpecificationVersionFromComponentVersionInput = {
  /** The id of the ComponentVersion to remove the InterfaceSpecificationVersion from. */
  componentVersion: Scalars['ID']['input'];
  /** The id of the InterfaceSpecificationVersion to remove. Must be part of the same Component as `componentVersion` */
  interfaceSpecificationVersion: Scalars['ID']['input'];
  /** If `true`, interfaceSpecificationVersion will be no longer invisible on componentVersion */
  invisible: Scalars['Boolean']['input'];
  /** If `true`, interfaceSpecificationVersion will be no longer visible on componentVersion */
  visible: Scalars['Boolean']['input'];
};

/** Input for the removeIssueFromPinnedIssues mutation */
export type RemoveIssueFromPinnedIssuesInput = {
  /** The id of the Issue to unpin */
  issue: Scalars['ID']['input'];
  /** The id of the Trackable where the Issue should be unpinned */
  trackable: Scalars['ID']['input'];
};

/** Input for the removeIssueFromTrackable mutation */
export type RemoveIssueFromTrackableInput = {
  /** The id of the Issue to remove from the Trackable */
  issue: Scalars['ID']['input'];
  /** The id of the Trackable where to remove the Issue */
  trackable: Scalars['ID']['input'];
};

/** Input for the removeIssueRelation mutations */
export type RemoveIssueRelationInput = {
  /** The id of the IssueRelation to remove */
  issueRelation: Scalars['ID']['input'];
};

/** Input for the removeLabelFromIssue mutation */
export type RemoveLabelFromIssueInput = {
  /** The id of the Issue where to remove the Label */
  issue: Scalars['ID']['input'];
  /** The id of the Label to remove */
  label: Scalars['ID']['input'];
};

/** Input for the removeLabelFromTrackable mutation */
export type RemoveLabelFromTrackableInput = {
  /** The id of the Label to remove */
  label: Scalars['ID']['input'];
  /** The id of the Trackable where to remove the Label */
  trackable: Scalars['ID']['input'];
};

/** Filter used to filter RemovedAffectedEntityEvent */
export type RemovedAffectedEntityEventFilterInput = {
  /** Connects all subformulas via and */
  and?: InputMaybe<Array<RemovedAffectedEntityEventFilterInput>>;
  /** Filter by createdAt */
  createdAt?: InputMaybe<DateTimeFilterInput>;
  /** Filters for nodes where the related node match this filter */
  createdBy?: InputMaybe<UserFilterInput>;
  /** Filter by id */
  id?: InputMaybe<IdFilterInput>;
  /** Filters for nodes where the related node match this filter */
  issue?: InputMaybe<IssueFilterInput>;
  /** Filter by lastModifiedAt */
  lastModifiedAt?: InputMaybe<DateTimeFilterInput>;
  /** Filters for nodes where the related node match this filter */
  lastModifiedBy?: InputMaybe<UserFilterInput>;
  /** Negates the subformula */
  not?: InputMaybe<RemovedAffectedEntityEventFilterInput>;
  /** Connects all subformulas via or */
  or?: InputMaybe<Array<RemovedAffectedEntityEventFilterInput>>;
  /** Filters for nodes where the related node match this filter */
  parentItem?: InputMaybe<ParentTimelineItemFilterInput>;
  /** Filters for nodes where the related node match this filter */
  removedAffectedEntity?: InputMaybe<AffectedByIssueFilterInput>;
  /** Filter for specific timeline items. Entries are joined by OR */
  timelineItemTypes?: InputMaybe<Array<TimelineItemType>>;
};

/** Filter used to filter RemovedArtefactEvent */
export type RemovedArtefactEventFilterInput = {
  /** Connects all subformulas via and */
  and?: InputMaybe<Array<RemovedArtefactEventFilterInput>>;
  /** Filter by createdAt */
  createdAt?: InputMaybe<DateTimeFilterInput>;
  /** Filters for nodes where the related node match this filter */
  createdBy?: InputMaybe<UserFilterInput>;
  /** Filter by id */
  id?: InputMaybe<IdFilterInput>;
  /** Filters for nodes where the related node match this filter */
  issue?: InputMaybe<IssueFilterInput>;
  /** Filter by lastModifiedAt */
  lastModifiedAt?: InputMaybe<DateTimeFilterInput>;
  /** Filters for nodes where the related node match this filter */
  lastModifiedBy?: InputMaybe<UserFilterInput>;
  /** Negates the subformula */
  not?: InputMaybe<RemovedArtefactEventFilterInput>;
  /** Connects all subformulas via or */
  or?: InputMaybe<Array<RemovedArtefactEventFilterInput>>;
  /** Filters for nodes where the related node match this filter */
  parentItem?: InputMaybe<ParentTimelineItemFilterInput>;
  /** Filters for nodes where the related node match this filter */
  removedArtefact?: InputMaybe<ArtefactFilterInput>;
  /** Filter for specific timeline items. Entries are joined by OR */
  timelineItemTypes?: InputMaybe<Array<TimelineItemType>>;
};

/** Filter used to filter RemovedAssignmentEvent */
export type RemovedAssignmentEventFilterInput = {
  /** Connects all subformulas via and */
  and?: InputMaybe<Array<RemovedAssignmentEventFilterInput>>;
  /** Filter by createdAt */
  createdAt?: InputMaybe<DateTimeFilterInput>;
  /** Filters for nodes where the related node match this filter */
  createdBy?: InputMaybe<UserFilterInput>;
  /** Filter by id */
  id?: InputMaybe<IdFilterInput>;
  /** Filters for nodes where the related node match this filter */
  issue?: InputMaybe<IssueFilterInput>;
  /** Filter by lastModifiedAt */
  lastModifiedAt?: InputMaybe<DateTimeFilterInput>;
  /** Filters for nodes where the related node match this filter */
  lastModifiedBy?: InputMaybe<UserFilterInput>;
  /** Negates the subformula */
  not?: InputMaybe<RemovedAssignmentEventFilterInput>;
  /** Connects all subformulas via or */
  or?: InputMaybe<Array<RemovedAssignmentEventFilterInput>>;
  /** Filters for nodes where the related node match this filter */
  parentItem?: InputMaybe<ParentTimelineItemFilterInput>;
  /** Filters for nodes where the related node match this filter */
  removedAssignment?: InputMaybe<AssignmentFilterInput>;
  /** Filter for specific timeline items. Entries are joined by OR */
  timelineItemTypes?: InputMaybe<Array<TimelineItemType>>;
};

/** Filter used to filter RemovedFromPinnedIssuesEvent */
export type RemovedFromPinnedIssuesEventFilterInput = {
  /** Connects all subformulas via and */
  and?: InputMaybe<Array<RemovedFromPinnedIssuesEventFilterInput>>;
  /** Filter by createdAt */
  createdAt?: InputMaybe<DateTimeFilterInput>;
  /** Filters for nodes where the related node match this filter */
  createdBy?: InputMaybe<UserFilterInput>;
  /** Filter by id */
  id?: InputMaybe<IdFilterInput>;
  /** Filters for nodes where the related node match this filter */
  issue?: InputMaybe<IssueFilterInput>;
  /** Filter by lastModifiedAt */
  lastModifiedAt?: InputMaybe<DateTimeFilterInput>;
  /** Filters for nodes where the related node match this filter */
  lastModifiedBy?: InputMaybe<UserFilterInput>;
  /** Negates the subformula */
  not?: InputMaybe<RemovedFromPinnedIssuesEventFilterInput>;
  /** Connects all subformulas via or */
  or?: InputMaybe<Array<RemovedFromPinnedIssuesEventFilterInput>>;
  /** Filters for nodes where the related node match this filter */
  parentItem?: InputMaybe<ParentTimelineItemFilterInput>;
  /** Filter for specific timeline items. Entries are joined by OR */
  timelineItemTypes?: InputMaybe<Array<TimelineItemType>>;
  /** Filters for nodes where the related node match this filter */
  unpinnedOn?: InputMaybe<TrackableFilterInput>;
};

/** Filter used to filter RemovedFromTrackableEvent */
export type RemovedFromTrackableEventFilterInput = {
  /** Connects all subformulas via and */
  and?: InputMaybe<Array<RemovedFromTrackableEventFilterInput>>;
  /** Filter by childItems */
  childItems?: InputMaybe<TimelineItemListFilterInput>;
  /** Filter by createdAt */
  createdAt?: InputMaybe<DateTimeFilterInput>;
  /** Filters for nodes where the related node match this filter */
  createdBy?: InputMaybe<UserFilterInput>;
  /** Filter by id */
  id?: InputMaybe<IdFilterInput>;
  /** Filters for nodes where the related node match this filter */
  issue?: InputMaybe<IssueFilterInput>;
  /** Filter by lastModifiedAt */
  lastModifiedAt?: InputMaybe<DateTimeFilterInput>;
  /** Filters for nodes where the related node match this filter */
  lastModifiedBy?: InputMaybe<UserFilterInput>;
  /** Negates the subformula */
  not?: InputMaybe<RemovedFromTrackableEventFilterInput>;
  /** Connects all subformulas via or */
  or?: InputMaybe<Array<RemovedFromTrackableEventFilterInput>>;
  /** Filters for nodes where the related node match this filter */
  parentItem?: InputMaybe<ParentTimelineItemFilterInput>;
  /** Filters for nodes where the related node match this filter */
  removedFromTrackable?: InputMaybe<TrackableFilterInput>;
  /** Filter for specific timeline items. Entries are joined by OR */
  timelineItemTypes?: InputMaybe<Array<TimelineItemType>>;
};

/** Filter used to filter RemovedIncomingRelationEvent */
export type RemovedIncomingRelationEventFilterInput = {
  /** Connects all subformulas via and */
  and?: InputMaybe<Array<RemovedIncomingRelationEventFilterInput>>;
  /** Filter by createdAt */
  createdAt?: InputMaybe<DateTimeFilterInput>;
  /** Filters for nodes where the related node match this filter */
  createdBy?: InputMaybe<UserFilterInput>;
  /** Filter by id */
  id?: InputMaybe<IdFilterInput>;
  /** Filters for nodes where the related node match this filter */
  issue?: InputMaybe<IssueFilterInput>;
  /** Filter by lastModifiedAt */
  lastModifiedAt?: InputMaybe<DateTimeFilterInput>;
  /** Filters for nodes where the related node match this filter */
  lastModifiedBy?: InputMaybe<UserFilterInput>;
  /** Negates the subformula */
  not?: InputMaybe<RemovedIncomingRelationEventFilterInput>;
  /** Connects all subformulas via or */
  or?: InputMaybe<Array<RemovedIncomingRelationEventFilterInput>>;
  /** Filters for nodes where the related node match this filter */
  parentItem?: InputMaybe<ParentTimelineItemFilterInput>;
  /** Filters for nodes where the related node match this filter */
  removedRelation?: InputMaybe<IssueRelationFilterInput>;
  /** Filter for specific timeline items. Entries are joined by OR */
  timelineItemTypes?: InputMaybe<Array<TimelineItemType>>;
};

/** Filter used to filter RemovedLabelEvent */
export type RemovedLabelEventFilterInput = {
  /** Connects all subformulas via and */
  and?: InputMaybe<Array<RemovedLabelEventFilterInput>>;
  /** Filter by createdAt */
  createdAt?: InputMaybe<DateTimeFilterInput>;
  /** Filters for nodes where the related node match this filter */
  createdBy?: InputMaybe<UserFilterInput>;
  /** Filter by id */
  id?: InputMaybe<IdFilterInput>;
  /** Filters for nodes where the related node match this filter */
  issue?: InputMaybe<IssueFilterInput>;
  /** Filter by lastModifiedAt */
  lastModifiedAt?: InputMaybe<DateTimeFilterInput>;
  /** Filters for nodes where the related node match this filter */
  lastModifiedBy?: InputMaybe<UserFilterInput>;
  /** Negates the subformula */
  not?: InputMaybe<RemovedLabelEventFilterInput>;
  /** Connects all subformulas via or */
  or?: InputMaybe<Array<RemovedLabelEventFilterInput>>;
  /** Filters for nodes where the related node match this filter */
  parentItem?: InputMaybe<ParentTimelineItemFilterInput>;
  /** Filters for nodes where the related node match this filter */
  removedLabel?: InputMaybe<LabelFilterInput>;
  /** Filter for specific timeline items. Entries are joined by OR */
  timelineItemTypes?: InputMaybe<Array<TimelineItemType>>;
};

/** Filter used to filter RemovedOutgoingRelationEvent */
export type RemovedOutgoingRelationEventFilterInput = {
  /** Connects all subformulas via and */
  and?: InputMaybe<Array<RemovedOutgoingRelationEventFilterInput>>;
  /** Filter by createdAt */
  createdAt?: InputMaybe<DateTimeFilterInput>;
  /** Filters for nodes where the related node match this filter */
  createdBy?: InputMaybe<UserFilterInput>;
  /** Filter by id */
  id?: InputMaybe<IdFilterInput>;
  /** Filters for nodes where the related node match this filter */
  issue?: InputMaybe<IssueFilterInput>;
  /** Filter by lastModifiedAt */
  lastModifiedAt?: InputMaybe<DateTimeFilterInput>;
  /** Filters for nodes where the related node match this filter */
  lastModifiedBy?: InputMaybe<UserFilterInput>;
  /** Negates the subformula */
  not?: InputMaybe<RemovedOutgoingRelationEventFilterInput>;
  /** Connects all subformulas via or */
  or?: InputMaybe<Array<RemovedOutgoingRelationEventFilterInput>>;
  /** Filters for nodes where the related node match this filter */
  parentItem?: InputMaybe<ParentTimelineItemFilterInput>;
  /** Filters for nodes where the related node match this filter */
  removedRelation?: InputMaybe<IssueRelationFilterInput>;
  /** Filter for specific timeline items. Entries are joined by OR */
  timelineItemTypes?: InputMaybe<Array<TimelineItemType>>;
};

/** Filter used to filter RemovedRelationEvent */
export type RemovedRelationEventFilterInput = {
  /** Connects all subformulas via and */
  and?: InputMaybe<Array<RemovedRelationEventFilterInput>>;
  /** Filter by createdAt */
  createdAt?: InputMaybe<DateTimeFilterInput>;
  /** Filters for nodes where the related node match this filter */
  createdBy?: InputMaybe<UserFilterInput>;
  /** Filter by id */
  id?: InputMaybe<IdFilterInput>;
  /** Filter for nodes of type RemovedIncomingRelationEvent */
  isRemovedIncomingRelationEventAnd?: InputMaybe<RemovedIncomingRelationEventFilterInput>;
  /** Filter for nodes of type RemovedOutgoingRelationEvent */
  isRemovedOutgoingRelationEventAnd?: InputMaybe<RemovedOutgoingRelationEventFilterInput>;
  /** Filters for nodes where the related node match this filter */
  issue?: InputMaybe<IssueFilterInput>;
  /** Filter by lastModifiedAt */
  lastModifiedAt?: InputMaybe<DateTimeFilterInput>;
  /** Filters for nodes where the related node match this filter */
  lastModifiedBy?: InputMaybe<UserFilterInput>;
  /** Negates the subformula */
  not?: InputMaybe<RemovedRelationEventFilterInput>;
  /** Connects all subformulas via or */
  or?: InputMaybe<Array<RemovedRelationEventFilterInput>>;
  /** Filters for nodes where the related node match this filter */
  parentItem?: InputMaybe<ParentTimelineItemFilterInput>;
  /** Filters for nodes where the related node match this filter */
  removedRelation?: InputMaybe<IssueRelationFilterInput>;
  /** Filter for specific timeline items. Entries are joined by OR */
  timelineItemTypes?: InputMaybe<Array<TimelineItemType>>;
};

/** Filter used to filter RemovedTemplatedFieldEvent */
export type RemovedTemplatedFieldEventFilterInput = {
  /** Connects all subformulas via and */
  and?: InputMaybe<Array<RemovedTemplatedFieldEventFilterInput>>;
  /** Filter by createdAt */
  createdAt?: InputMaybe<DateTimeFilterInput>;
  /** Filters for nodes where the related node match this filter */
  createdBy?: InputMaybe<UserFilterInput>;
  /** Filter by fieldName */
  fieldName?: InputMaybe<StringFilterInput>;
  /** Filter by id */
  id?: InputMaybe<IdFilterInput>;
  /** Filters for nodes where the related node match this filter */
  issue?: InputMaybe<IssueFilterInput>;
  /** Filter by lastModifiedAt */
  lastModifiedAt?: InputMaybe<DateTimeFilterInput>;
  /** Filters for nodes where the related node match this filter */
  lastModifiedBy?: InputMaybe<UserFilterInput>;
  /** Negates the subformula */
  not?: InputMaybe<RemovedTemplatedFieldEventFilterInput>;
  /** Connects all subformulas via or */
  or?: InputMaybe<Array<RemovedTemplatedFieldEventFilterInput>>;
  /** Filters for nodes where the related node match this filter */
  parentItem?: InputMaybe<ParentTimelineItemFilterInput>;
  /** Filter for specific timeline items. Entries are joined by OR */
  timelineItemTypes?: InputMaybe<Array<TimelineItemType>>;
};

/** Type of a Shape */
export enum ShapeType {
  /** A Circle */
  Circle = 'CIRCLE',
  /** An Ellipse */
  Ellipse = 'ELLIPSE',
  /** A Hexagon */
  Hexagon = 'HEXAGON',
  /** A Rectangle */
  Rect = 'RECT',
  /** A Rhombus */
  Rhombus = 'RHOMBUS'
}

/** Filter used to filter StateChangedEvent */
export type StateChangedEventFilterInput = {
  /** Connects all subformulas via and */
  and?: InputMaybe<Array<StateChangedEventFilterInput>>;
  /** Filter by createdAt */
  createdAt?: InputMaybe<DateTimeFilterInput>;
  /** Filters for nodes where the related node match this filter */
  createdBy?: InputMaybe<UserFilterInput>;
  /** Filter by id */
  id?: InputMaybe<IdFilterInput>;
  /** Filters for nodes where the related node match this filter */
  issue?: InputMaybe<IssueFilterInput>;
  /** Filter by lastModifiedAt */
  lastModifiedAt?: InputMaybe<DateTimeFilterInput>;
  /** Filters for nodes where the related node match this filter */
  lastModifiedBy?: InputMaybe<UserFilterInput>;
  /** Filters for nodes where the related node match this filter */
  newState?: InputMaybe<IssueStateFilterInput>;
  /** Negates the subformula */
  not?: InputMaybe<StateChangedEventFilterInput>;
  /** Filters for nodes where the related node match this filter */
  oldState?: InputMaybe<IssueStateFilterInput>;
  /** Connects all subformulas via or */
  or?: InputMaybe<Array<StateChangedEventFilterInput>>;
  /** Filters for nodes where the related node match this filter */
  parentItem?: InputMaybe<ParentTimelineItemFilterInput>;
  /** Filter for specific timeline items. Entries are joined by OR */
  timelineItemTypes?: InputMaybe<Array<TimelineItemType>>;
};

/** Filter which can be used to filter for Nodes with a specific String field */
export type StringFilterInput = {
  /** Matches Strings which contain the provided value */
  contains?: InputMaybe<Scalars['String']['input']>;
  /** Matches Strings which end with the provided value */
  endsWith?: InputMaybe<Scalars['String']['input']>;
  /** Matches values which are equal to the provided value */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Matches values which are greater than the provided value */
  gt?: InputMaybe<Scalars['String']['input']>;
  /** Matches values which are greater than or equal to the provided value */
  gte?: InputMaybe<Scalars['String']['input']>;
  /** Matches values which are equal to any of the provided values */
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches values which are lesser than the provided value */
  lt?: InputMaybe<Scalars['String']['input']>;
  /** Matches values which are lesser than or equal to the provided value */
  lte?: InputMaybe<Scalars['String']['input']>;
  /** Matches Strings using the provided RegEx */
  matches?: InputMaybe<Scalars['String']['input']>;
  /** Matches Strings which start with the provided value */
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

/** Input to create a StrokeStyle */
export type StrokeStyleInput = {
  /** The color of the stroke */
  color?: InputMaybe<Scalars['String']['input']>;
  /** The dash pattern of the stroke */
  dash?: InputMaybe<Array<Scalars['Float']['input']>>;
};

/** Input to create a SubTemplate */
export type SubTemplateInput = {
  /** The description of the NamedNode */
  description: Scalars['String']['input'];
  /** The name of the NamedNode, must not be blank */
  name: Scalars['String']['input'];
  /**
   * Additional initial templateFieldSpecifications, should be a JSON schema JSON.
   *         Must be disjoint with templateFieldSpecifications of templates this template extends.
   *
   */
  templateFieldSpecifications?: InputMaybe<Array<JsonFieldInput>>;
};

/** Filter used to filter SyncPermissionTarget */
export type SyncPermissionTargetFilterInput = {
  /** Connects all subformulas via and */
  and?: InputMaybe<Array<SyncPermissionTargetFilterInput>>;
  /** Filter by description */
  description?: InputMaybe<StringFilterInput>;
  /** Filter by id */
  id?: InputMaybe<IdFilterInput>;
  /** Filter for nodes of type IMS */
  isIMSAnd?: InputMaybe<ImsFilterInput>;
  /** Filter for nodes of type IMSProject */
  isIMSProjectAnd?: InputMaybe<ImsProjectFilterInput>;
  /** Filter by name */
  name?: InputMaybe<StringFilterInput>;
  /** Negates the subformula */
  not?: InputMaybe<SyncPermissionTargetFilterInput>;
  /** Connects all subformulas via or */
  or?: InputMaybe<Array<SyncPermissionTargetFilterInput>>;
  /** Filter by syncOthersAllowedBy */
  syncOthersAllowedBy?: InputMaybe<GropiusUserListFilterInput>;
  /** Filter by syncSelfAllowedBy */
  syncSelfAllowedBy?: InputMaybe<GropiusUserListFilterInput>;
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type SyncPermissionTargetListFilterInput = {
  /** Filters for nodes where all of the related nodes match this filter */
  all?: InputMaybe<SyncPermissionTargetFilterInput>;
  /** Filters for nodes where any of the related nodes match this filter */
  any?: InputMaybe<SyncPermissionTargetFilterInput>;
  /** Filters for nodes where none of the related nodes match this filter */
  none?: InputMaybe<SyncPermissionTargetFilterInput>;
};

/** Defines the order of a SyncPermissionTarget list */
export type SyncPermissionTargetOrder = {
  /** The direction to order by, defaults to ASC */
  direction?: InputMaybe<OrderDirection>;
  /** The field to order by, defaults to ID */
  field?: InputMaybe<SyncPermissionTargetOrderField>;
};

/** Fields a list of SyncPermissionTarget can be sorted by */
export enum SyncPermissionTargetOrderField {
  /** Order by id */
  Id = 'ID',
  /** Order by name */
  Name = 'NAME'
}

/** Filter used to filter TemplateChangedEvent */
export type TemplateChangedEventFilterInput = {
  /** Connects all subformulas via and */
  and?: InputMaybe<Array<TemplateChangedEventFilterInput>>;
  /** Filter by childItems */
  childItems?: InputMaybe<TimelineItemListFilterInput>;
  /** Filter by createdAt */
  createdAt?: InputMaybe<DateTimeFilterInput>;
  /** Filters for nodes where the related node match this filter */
  createdBy?: InputMaybe<UserFilterInput>;
  /** Filter by id */
  id?: InputMaybe<IdFilterInput>;
  /** Filters for nodes where the related node match this filter */
  issue?: InputMaybe<IssueFilterInput>;
  /** Filter by lastModifiedAt */
  lastModifiedAt?: InputMaybe<DateTimeFilterInput>;
  /** Filters for nodes where the related node match this filter */
  lastModifiedBy?: InputMaybe<UserFilterInput>;
  /** Filters for nodes where the related node match this filter */
  newTemplate?: InputMaybe<IssueTemplateFilterInput>;
  /** Negates the subformula */
  not?: InputMaybe<TemplateChangedEventFilterInput>;
  /** Filters for nodes where the related node match this filter */
  oldTemplate?: InputMaybe<IssueTemplateFilterInput>;
  /** Connects all subformulas via or */
  or?: InputMaybe<Array<TemplateChangedEventFilterInput>>;
  /** Filters for nodes where the related node match this filter */
  parentItem?: InputMaybe<ParentTimelineItemFilterInput>;
  /** Filter for specific timeline items. Entries are joined by OR */
  timelineItemTypes?: InputMaybe<Array<TimelineItemType>>;
};

/** Filter used to filter TemplatedFieldChangedEvent */
export type TemplatedFieldChangedEventFilterInput = {
  /** Connects all subformulas via and */
  and?: InputMaybe<Array<TemplatedFieldChangedEventFilterInput>>;
  /** Filter by createdAt */
  createdAt?: InputMaybe<DateTimeFilterInput>;
  /** Filters for nodes where the related node match this filter */
  createdBy?: InputMaybe<UserFilterInput>;
  /** Filter by fieldName */
  fieldName?: InputMaybe<StringFilterInput>;
  /** Filter by id */
  id?: InputMaybe<IdFilterInput>;
  /** Filters for nodes where the related node match this filter */
  issue?: InputMaybe<IssueFilterInput>;
  /** Filter by lastModifiedAt */
  lastModifiedAt?: InputMaybe<DateTimeFilterInput>;
  /** Filters for nodes where the related node match this filter */
  lastModifiedBy?: InputMaybe<UserFilterInput>;
  /** Negates the subformula */
  not?: InputMaybe<TemplatedFieldChangedEventFilterInput>;
  /** Connects all subformulas via or */
  or?: InputMaybe<Array<TemplatedFieldChangedEventFilterInput>>;
  /** Filters for nodes where the related node match this filter */
  parentItem?: InputMaybe<ParentTimelineItemFilterInput>;
  /** Filter for specific timeline items. Entries are joined by OR */
  timelineItemTypes?: InputMaybe<Array<TimelineItemType>>;
};

/** Filter used to filter TimelineItem */
export type TimelineItemFilterInput = {
  /** Connects all subformulas via and */
  and?: InputMaybe<Array<TimelineItemFilterInput>>;
  /** Filter by createdAt */
  createdAt?: InputMaybe<DateTimeFilterInput>;
  /** Filters for nodes where the related node match this filter */
  createdBy?: InputMaybe<UserFilterInput>;
  /** Filter by id */
  id?: InputMaybe<IdFilterInput>;
  /** Filter for nodes of type AbstractTypeChangedEvent */
  isAbstractTypeChangedEventAnd?: InputMaybe<AbstractTypeChangedEventFilterInput>;
  /** Filter for nodes of type AddedAffectedEntityEvent */
  isAddedAffectedEntityEventAnd?: InputMaybe<AddedAffectedEntityEventFilterInput>;
  /** Filter for nodes of type AddedArtefactEvent */
  isAddedArtefactEventAnd?: InputMaybe<AddedArtefactEventFilterInput>;
  /** Filter for nodes of type AddedLabelEvent */
  isAddedLabelEventAnd?: InputMaybe<AddedLabelEventFilterInput>;
  /** Filter for nodes of type AddedToPinnedIssuesEvent */
  isAddedToPinnedIssuesEventAnd?: InputMaybe<AddedToPinnedIssuesEventFilterInput>;
  /** Filter for nodes of type AddedToTrackableEvent */
  isAddedToTrackableEventAnd?: InputMaybe<AddedToTrackableEventFilterInput>;
  /** Filter for nodes of type Assignment */
  isAssignmentAnd?: InputMaybe<AssignmentFilterInput>;
  /** Filter for nodes of type AssignmentTypeChangedEvent */
  isAssignmentTypeChangedEventAnd?: InputMaybe<AssignmentTypeChangedEventFilterInput>;
  /** Filter for nodes of type Body */
  isBodyAnd?: InputMaybe<BodyFilterInput>;
  /** Filter for nodes of type Comment */
  isCommentAnd?: InputMaybe<CommentFilterInput>;
  /** Filter for nodes of type IncomingRelationTypeChangedEvent */
  isIncomingRelationTypeChangedEventAnd?: InputMaybe<IncomingRelationTypeChangedEventFilterInput>;
  /** Filter for nodes of type IssueComment */
  isIssueCommentAnd?: InputMaybe<IssueCommentFilterInput>;
  /** Filter for nodes of type IssueRelation */
  isIssueRelationAnd?: InputMaybe<IssueRelationFilterInput>;
  /** Filter for nodes of type OutgoingRelationTypeChangedEvent */
  isOutgoingRelationTypeChangedEventAnd?: InputMaybe<OutgoingRelationTypeChangedEventFilterInput>;
  /** Filter for nodes of type ParentTimelineItem */
  isParentTimelineItemAnd?: InputMaybe<ParentTimelineItemFilterInput>;
  /** Filter for nodes of type PriorityChangedEvent */
  isPriorityChangedEventAnd?: InputMaybe<PriorityChangedEventFilterInput>;
  /** Filter for nodes of type PublicTimelineItem */
  isPublicTimelineItemAnd?: InputMaybe<PublicTimelineItemFilterInput>;
  /** Filter for nodes of type RelatedByIssueEvent */
  isRelatedByIssueEventAnd?: InputMaybe<RelatedByIssueEventFilterInput>;
  /** Filter for nodes of type RelationTypeChangedEvent */
  isRelationTypeChangedEventAnd?: InputMaybe<RelationTypeChangedEventFilterInput>;
  /** Filter for nodes of type RemovedAffectedEntityEvent */
  isRemovedAffectedEntityEventAnd?: InputMaybe<RemovedAffectedEntityEventFilterInput>;
  /** Filter for nodes of type RemovedArtefactEvent */
  isRemovedArtefactEventAnd?: InputMaybe<RemovedArtefactEventFilterInput>;
  /** Filter for nodes of type RemovedAssignmentEvent */
  isRemovedAssignmentEventAnd?: InputMaybe<RemovedAssignmentEventFilterInput>;
  /** Filter for nodes of type RemovedFromPinnedIssuesEvent */
  isRemovedFromPinnedIssuesEventAnd?: InputMaybe<RemovedFromPinnedIssuesEventFilterInput>;
  /** Filter for nodes of type RemovedFromTrackableEvent */
  isRemovedFromTrackableEventAnd?: InputMaybe<RemovedFromTrackableEventFilterInput>;
  /** Filter for nodes of type RemovedIncomingRelationEvent */
  isRemovedIncomingRelationEventAnd?: InputMaybe<RemovedIncomingRelationEventFilterInput>;
  /** Filter for nodes of type RemovedLabelEvent */
  isRemovedLabelEventAnd?: InputMaybe<RemovedLabelEventFilterInput>;
  /** Filter for nodes of type RemovedOutgoingRelationEvent */
  isRemovedOutgoingRelationEventAnd?: InputMaybe<RemovedOutgoingRelationEventFilterInput>;
  /** Filter for nodes of type RemovedRelationEvent */
  isRemovedRelationEventAnd?: InputMaybe<RemovedRelationEventFilterInput>;
  /** Filter for nodes of type RemovedTemplatedFieldEvent */
  isRemovedTemplatedFieldEventAnd?: InputMaybe<RemovedTemplatedFieldEventFilterInput>;
  /** Filter for nodes of type StateChangedEvent */
  isStateChangedEventAnd?: InputMaybe<StateChangedEventFilterInput>;
  /** Filter for nodes of type TemplateChangedEvent */
  isTemplateChangedEventAnd?: InputMaybe<TemplateChangedEventFilterInput>;
  /** Filter for nodes of type TemplatedFieldChangedEvent */
  isTemplatedFieldChangedEventAnd?: InputMaybe<TemplatedFieldChangedEventFilterInput>;
  /** Filter for nodes of type TitleChangedEvent */
  isTitleChangedEventAnd?: InputMaybe<TitleChangedEventFilterInput>;
  /** Filter for nodes of type TypeChangedEvent */
  isTypeChangedEventAnd?: InputMaybe<TypeChangedEventFilterInput>;
  /** Filters for nodes where the related node match this filter */
  issue?: InputMaybe<IssueFilterInput>;
  /** Filter by lastModifiedAt */
  lastModifiedAt?: InputMaybe<DateTimeFilterInput>;
  /** Filters for nodes where the related node match this filter */
  lastModifiedBy?: InputMaybe<UserFilterInput>;
  /** Negates the subformula */
  not?: InputMaybe<TimelineItemFilterInput>;
  /** Connects all subformulas via or */
  or?: InputMaybe<Array<TimelineItemFilterInput>>;
  /** Filters for nodes where the related node match this filter */
  parentItem?: InputMaybe<ParentTimelineItemFilterInput>;
  /** Filter for specific timeline items. Entries are joined by OR */
  timelineItemTypes?: InputMaybe<Array<TimelineItemType>>;
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type TimelineItemListFilterInput = {
  /** Filters for nodes where all of the related nodes match this filter */
  all?: InputMaybe<TimelineItemFilterInput>;
  /** Filters for nodes where any of the related nodes match this filter */
  any?: InputMaybe<TimelineItemFilterInput>;
  /** Filters for nodes where none of the related nodes match this filter */
  none?: InputMaybe<TimelineItemFilterInput>;
};

/** Defines the order of a TimelineItem list */
export type TimelineItemOrder = {
  /** The direction to order by, defaults to ASC */
  direction?: InputMaybe<OrderDirection>;
  /** The field to order by, defaults to ID */
  field?: InputMaybe<TimelineItemOrderField>;
};

/** Fields a list of TimelineItem can be sorted by */
export enum TimelineItemOrderField {
  /** Order by createdAt */
  CreatedAt = 'CREATED_AT',
  /** Order by id */
  Id = 'ID',
  /** Order by lastModifiedAt */
  LastModifiedAt = 'LAST_MODIFIED_AT'
}

/** All timeline items types */
export enum TimelineItemType {
  /** AbstractTypeChangedEvent timeline item */
  AbstractTypeChangedEvent = 'ABSTRACT_TYPE_CHANGED_EVENT',
  /** AddedAffectedEntityEvent timeline item */
  AddedAffectedEntityEvent = 'ADDED_AFFECTED_ENTITY_EVENT',
  /** AddedArtefactEvent timeline item */
  AddedArtefactEvent = 'ADDED_ARTEFACT_EVENT',
  /** AddedLabelEvent timeline item */
  AddedLabelEvent = 'ADDED_LABEL_EVENT',
  /** AddedToPinnedIssuesEvent timeline item */
  AddedToPinnedIssuesEvent = 'ADDED_TO_PINNED_ISSUES_EVENT',
  /** AddedToTrackableEvent timeline item */
  AddedToTrackableEvent = 'ADDED_TO_TRACKABLE_EVENT',
  /** Assignment timeline item */
  Assignment = 'ASSIGNMENT',
  /** AssignmentTypeChangedEvent timeline item */
  AssignmentTypeChangedEvent = 'ASSIGNMENT_TYPE_CHANGED_EVENT',
  /** Body timeline item */
  Body = 'BODY',
  /** Comment timeline item */
  Comment = 'COMMENT',
  /** IncomingRelationTypeChangedEvent timeline item */
  IncomingRelationTypeChangedEvent = 'INCOMING_RELATION_TYPE_CHANGED_EVENT',
  /** IssueComment timeline item */
  IssueComment = 'ISSUE_COMMENT',
  /** IssueRelation timeline item */
  IssueRelation = 'ISSUE_RELATION',
  /** OutgoingRelationTypeChangedEvent timeline item */
  OutgoingRelationTypeChangedEvent = 'OUTGOING_RELATION_TYPE_CHANGED_EVENT',
  /** ParentTimelineItem timeline item */
  ParentTimelineItem = 'PARENT_TIMELINE_ITEM',
  /** PriorityChangedEvent timeline item */
  PriorityChangedEvent = 'PRIORITY_CHANGED_EVENT',
  /** PublicTimelineItem timeline item */
  PublicTimelineItem = 'PUBLIC_TIMELINE_ITEM',
  /** RelatedByIssueEvent timeline item */
  RelatedByIssueEvent = 'RELATED_BY_ISSUE_EVENT',
  /** RelationTypeChangedEvent timeline item */
  RelationTypeChangedEvent = 'RELATION_TYPE_CHANGED_EVENT',
  /** RemovedAffectedEntityEvent timeline item */
  RemovedAffectedEntityEvent = 'REMOVED_AFFECTED_ENTITY_EVENT',
  /** RemovedArtefactEvent timeline item */
  RemovedArtefactEvent = 'REMOVED_ARTEFACT_EVENT',
  /** RemovedAssignmentEvent timeline item */
  RemovedAssignmentEvent = 'REMOVED_ASSIGNMENT_EVENT',
  /** RemovedFromPinnedIssuesEvent timeline item */
  RemovedFromPinnedIssuesEvent = 'REMOVED_FROM_PINNED_ISSUES_EVENT',
  /** RemovedFromTrackableEvent timeline item */
  RemovedFromTrackableEvent = 'REMOVED_FROM_TRACKABLE_EVENT',
  /** RemovedIncomingRelationEvent timeline item */
  RemovedIncomingRelationEvent = 'REMOVED_INCOMING_RELATION_EVENT',
  /** RemovedLabelEvent timeline item */
  RemovedLabelEvent = 'REMOVED_LABEL_EVENT',
  /** RemovedOutgoingRelationEvent timeline item */
  RemovedOutgoingRelationEvent = 'REMOVED_OUTGOING_RELATION_EVENT',
  /** RemovedRelationEvent timeline item */
  RemovedRelationEvent = 'REMOVED_RELATION_EVENT',
  /** RemovedTemplatedFieldEvent timeline item */
  RemovedTemplatedFieldEvent = 'REMOVED_TEMPLATED_FIELD_EVENT',
  /** StateChangedEvent timeline item */
  StateChangedEvent = 'STATE_CHANGED_EVENT',
  /** TemplatedFieldChangedEvent timeline item */
  TemplatedFieldChangedEvent = 'TEMPLATED_FIELD_CHANGED_EVENT',
  /** TemplateChangedEvent timeline item */
  TemplateChangedEvent = 'TEMPLATE_CHANGED_EVENT',
  /** TimelineItem timeline item */
  TimelineItem = 'TIMELINE_ITEM',
  /** TitleChangedEvent timeline item */
  TitleChangedEvent = 'TITLE_CHANGED_EVENT',
  /** TypeChangedEvent timeline item */
  TypeChangedEvent = 'TYPE_CHANGED_EVENT'
}

/** Filter used to filter TitleChangedEvent */
export type TitleChangedEventFilterInput = {
  /** Connects all subformulas via and */
  and?: InputMaybe<Array<TitleChangedEventFilterInput>>;
  /** Filter by createdAt */
  createdAt?: InputMaybe<DateTimeFilterInput>;
  /** Filters for nodes where the related node match this filter */
  createdBy?: InputMaybe<UserFilterInput>;
  /** Filter by id */
  id?: InputMaybe<IdFilterInput>;
  /** Filters for nodes where the related node match this filter */
  issue?: InputMaybe<IssueFilterInput>;
  /** Filter by lastModifiedAt */
  lastModifiedAt?: InputMaybe<DateTimeFilterInput>;
  /** Filters for nodes where the related node match this filter */
  lastModifiedBy?: InputMaybe<UserFilterInput>;
  /** Filter by newTitle */
  newTitle?: InputMaybe<StringFilterInput>;
  /** Negates the subformula */
  not?: InputMaybe<TitleChangedEventFilterInput>;
  /** Filter by oldTitle */
  oldTitle?: InputMaybe<StringFilterInput>;
  /** Connects all subformulas via or */
  or?: InputMaybe<Array<TitleChangedEventFilterInput>>;
  /** Filters for nodes where the related node match this filter */
  parentItem?: InputMaybe<ParentTimelineItemFilterInput>;
  /** Filter for specific timeline items. Entries are joined by OR */
  timelineItemTypes?: InputMaybe<Array<TimelineItemType>>;
};

/** Filter used to filter Trackable */
export type TrackableFilterInput = {
  /** Filter by affectingIssues */
  affectingIssues?: InputMaybe<IssueListFilterInput>;
  /** Connects all subformulas via and */
  and?: InputMaybe<Array<TrackableFilterInput>>;
  /** Filter by artefacts */
  artefacts?: InputMaybe<ArtefactListFilterInput>;
  /** Filter by description */
  description?: InputMaybe<StringFilterInput>;
  /** Filter by id */
  id?: InputMaybe<IdFilterInput>;
  /** Filter for nodes of type Component */
  isComponentAnd?: InputMaybe<ComponentFilterInput>;
  /** Filter for nodes of type Project */
  isProjectAnd?: InputMaybe<ProjectFilterInput>;
  /** Filter by issues */
  issues?: InputMaybe<IssueListFilterInput>;
  /** Filter by labels */
  labels?: InputMaybe<LabelListFilterInput>;
  /** Filter by name */
  name?: InputMaybe<StringFilterInput>;
  /** Negates the subformula */
  not?: InputMaybe<TrackableFilterInput>;
  /** Connects all subformulas via or */
  or?: InputMaybe<Array<TrackableFilterInput>>;
  /** Filter by pinnedIssues */
  pinnedIssues?: InputMaybe<IssueListFilterInput>;
  /** Filters for AffectedByIssues which are related to a Trackable */
  relatedTo?: InputMaybe<Scalars['ID']['input']>;
  /** Filter by repositoryURL */
  repositoryURL?: InputMaybe<NullableStringFilterInput>;
  /** Filter by syncsTo */
  syncsTo?: InputMaybe<ImsProjectListFilterInput>;
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type TrackableListFilterInput = {
  /** Filters for nodes where all of the related nodes match this filter */
  all?: InputMaybe<TrackableFilterInput>;
  /** Filters for nodes where any of the related nodes match this filter */
  any?: InputMaybe<TrackableFilterInput>;
  /** Filters for nodes where none of the related nodes match this filter */
  none?: InputMaybe<TrackableFilterInput>;
};

/** Defines the order of a Trackable list */
export type TrackableOrder = {
  /** The direction to order by, defaults to ASC */
  direction?: InputMaybe<OrderDirection>;
  /** The field to order by, defaults to ID */
  field?: InputMaybe<TrackableOrderField>;
};

/** Fields a list of Trackable can be sorted by */
export enum TrackableOrderField {
  /** Order by id */
  Id = 'ID',
  /** Order by name */
  Name = 'NAME'
}

/** Filter used to filter TrackablePermission */
export type TrackablePermissionFilterInput = {
  /** Filter by allUsers */
  allUsers?: InputMaybe<BooleanFilterInput>;
  /** Connects all subformulas via and */
  and?: InputMaybe<Array<TrackablePermissionFilterInput>>;
  /** Filter by description */
  description?: InputMaybe<StringFilterInput>;
  /** Filter by id */
  id?: InputMaybe<IdFilterInput>;
  /** Filter for nodes of type ComponentPermission */
  isComponentPermissionAnd?: InputMaybe<ComponentPermissionFilterInput>;
  /** Filter for nodes of type ProjectPermission */
  isProjectPermissionAnd?: InputMaybe<ProjectPermissionFilterInput>;
  /** Filter by name */
  name?: InputMaybe<StringFilterInput>;
  /** Negates the subformula */
  not?: InputMaybe<TrackablePermissionFilterInput>;
  /** Connects all subformulas via or */
  or?: InputMaybe<Array<TrackablePermissionFilterInput>>;
  /** Filter by users */
  users?: InputMaybe<GropiusUserListFilterInput>;
};

/** Filter used to filter TypeChangedEvent */
export type TypeChangedEventFilterInput = {
  /** Connects all subformulas via and */
  and?: InputMaybe<Array<TypeChangedEventFilterInput>>;
  /** Filter by createdAt */
  createdAt?: InputMaybe<DateTimeFilterInput>;
  /** Filters for nodes where the related node match this filter */
  createdBy?: InputMaybe<UserFilterInput>;
  /** Filter by id */
  id?: InputMaybe<IdFilterInput>;
  /** Filters for nodes where the related node match this filter */
  issue?: InputMaybe<IssueFilterInput>;
  /** Filter by lastModifiedAt */
  lastModifiedAt?: InputMaybe<DateTimeFilterInput>;
  /** Filters for nodes where the related node match this filter */
  lastModifiedBy?: InputMaybe<UserFilterInput>;
  /** Filters for nodes where the related node match this filter */
  newType?: InputMaybe<IssueTypeFilterInput>;
  /** Negates the subformula */
  not?: InputMaybe<TypeChangedEventFilterInput>;
  /** Filters for nodes where the related node match this filter */
  oldType?: InputMaybe<IssueTypeFilterInput>;
  /** Connects all subformulas via or */
  or?: InputMaybe<Array<TypeChangedEventFilterInput>>;
  /** Filters for nodes where the related node match this filter */
  parentItem?: InputMaybe<ParentTimelineItemFilterInput>;
  /** Filter for specific timeline items. Entries are joined by OR */
  timelineItemTypes?: InputMaybe<Array<TimelineItemType>>;
};

/** Input to map an old type to a new type */
export type TypeMappingInput = {
  /** The new type, null representing no type */
  newType?: InputMaybe<Scalars['ID']['input']>;
  /** The old type, null representing no type */
  oldType: Scalars['ID']['input'];
};

/** Input for the updateArtefact mutation */
export type UpdateArtefactInput = {
  /** The new file of the Artefact */
  file?: InputMaybe<Scalars['URL']['input']>;
  /** The new value of the from field of the Artefact */
  from?: InputMaybe<Scalars['Int']['input']>;
  /** The id of the node to update */
  id: Scalars['ID']['input'];
  /**
   * If provided, the id of the new template for the Artefact
   *         Use `templatedFields` to update fields so that they conform with the new specifications.
   *         No longer needed fields are automatically removed.
   *
   */
  template?: InputMaybe<Scalars['ID']['input']>;
  /** Values for templatedFields to update */
  templatedFields?: InputMaybe<Array<JsonFieldInput>>;
  /** The new value of the to field of the Artefact */
  to?: InputMaybe<Scalars['Int']['input']>;
  /** New version of the Artefact */
  version?: InputMaybe<Scalars['String']['input']>;
};

/** Input for the updateBody mutation */
export type UpdateBodyInput = {
  /** The body of the Comment */
  body?: InputMaybe<Scalars['String']['input']>;
  /** The id of the node to update */
  id: Scalars['ID']['input'];
};

/** Input for the updateComponent mutation */
export type UpdateComponentInput = {
  /** Ids of permissions to add, must be disjoint with removedPermissions. */
  addedPermissions?: InputMaybe<Array<Scalars['ID']['input']>>;
  /**
   * Values for templatedFields of ComponentVersions to update.
   *         Only evaluated if `template` is provided!
   *         Affect all ComponentVersions of the updated Component
   *
   */
  componentVersionTemplatedFields?: InputMaybe<Array<JsonFieldInput>>;
  /** The description of the NamedNode */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The id of the node to update */
  id: Scalars['ID']['input'];
  /** The new name of the NamedNode, must not be empty */
  name?: InputMaybe<Scalars['String']['input']>;
  /**
   * Ids of permissions to remove, must be disjoint with addedPermissions.
   *         There must always be at least one permissions granting ADMIN to some GropiusUser left.
   *
   */
  removedPermissions?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** The repositoryURL of the named node */
  repositoryURL?: InputMaybe<Scalars['URL']['input']>;
  /**
   * If provided, the id of the new template for the Component
   *         Use `templatedFields` to update fields so that they conform with the new specifications.
   *         Use `componentVersionTemplatedFields` to update the `templatedFields` of ALL ComponentVersions
   *         No longer needed fields are automatically removed.
   *
   */
  template?: InputMaybe<Scalars['ID']['input']>;
  /** Values for templatedFields to update */
  templatedFields?: InputMaybe<Array<JsonFieldInput>>;
};

/** Input for the updateComponentPermission mutation */
export type UpdateComponentPermissionInput = {
  /** Permission entries to add, must be disjoint with removedEntries */
  addedEntries?: InputMaybe<Array<ComponentPermissionEntry>>;
  /** Ids of affected users to add */
  addedUsers?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** The new value for allUsers */
  allUsers?: InputMaybe<Scalars['Boolean']['input']>;
  /** The description of the NamedNode */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The id of the node to update */
  id: Scalars['ID']['input'];
  /** The new name of the NamedNode, must not be empty */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Permission entries to remove, must be disjoint with addedEntries */
  removedEntries?: InputMaybe<Array<ComponentPermissionEntry>>;
  /** Ids of affected users to remove */
  removedUsers?: InputMaybe<Array<Scalars['ID']['input']>>;
};

/** Input for the updateComponentVersion mutation */
export type UpdateComponentVersionInput = {
  /** The id of the node to update */
  id: Scalars['ID']['input'];
  /** New tags of the ComponentVersion */
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Values for templatedFields to update */
  templatedFields?: InputMaybe<Array<JsonFieldInput>>;
  /** New version of the ComponentVersion */
  version?: InputMaybe<Scalars['String']['input']>;
};

/** Input for the updateGlobalPermission mutation */
export type UpdateGlobalPermissionInput = {
  /** Permission entries to add, must be disjoint with removedEntries */
  addedEntries?: InputMaybe<Array<PermissionEntry>>;
  /** Ids of affected users to add */
  addedUsers?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** The new value for allUsers */
  allUsers?: InputMaybe<Scalars['Boolean']['input']>;
  /** The description of the NamedNode */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The id of the node to update */
  id: Scalars['ID']['input'];
  /** The new name of the NamedNode, must not be empty */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Permission entries to remove, must be disjoint with addedEntries */
  removedEntries?: InputMaybe<Array<PermissionEntry>>;
  /** Ids of affected users to remove */
  removedUsers?: InputMaybe<Array<Scalars['ID']['input']>>;
};

/** Input for the updateGropiusUserMutation */
export type UpdateGropiusUserInput = {
  /** The new avatar of the user */
  avatar?: InputMaybe<Scalars['URL']['input']>;
  /** The new displayName of the User to update */
  displayName?: InputMaybe<Scalars['String']['input']>;
  /** The new email of the User to update */
  email?: InputMaybe<Scalars['String']['input']>;
  /** The id of the node to update */
  id: Scalars['ID']['input'];
  /** The new value for isAdmin of the GropiusUser to update */
  isAdmin?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Input for the updateIMS mutation */
export type UpdateImsInput = {
  /** Ids of permissions to add, must be disjoint with removedPermissions. */
  addedPermissions?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** The description of the NamedNode */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The id of the node to update */
  id: Scalars['ID']['input'];
  /** The new name of the NamedNode, must not be empty */
  name?: InputMaybe<Scalars['String']['input']>;
  /**
   * Ids of permissions to remove, must be disjoint with addedPermissions.
   *         There must always be at least one permissions granting ADMIN to some GropiusUser left.
   *
   */
  removedPermissions?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Values for templatedFields to update */
  templatedFields?: InputMaybe<Array<JsonFieldInput>>;
};

/** Input for the updateImsPermission mutation */
export type UpdateImsPermissionInput = {
  /** Permission entries to add, must be disjoint with removedEntries */
  addedEntries?: InputMaybe<Array<ImsPermissionEntry>>;
  /** Ids of affected users to add */
  addedUsers?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** The new value for allUsers */
  allUsers?: InputMaybe<Scalars['Boolean']['input']>;
  /** The description of the NamedNode */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The id of the node to update */
  id: Scalars['ID']['input'];
  /** The new name of the NamedNode, must not be empty */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Permission entries to remove, must be disjoint with addedEntries */
  removedEntries?: InputMaybe<Array<ImsPermissionEntry>>;
  /** Ids of affected users to remove */
  removedUsers?: InputMaybe<Array<Scalars['ID']['input']>>;
};

/** Input for the updateIMSProject mutation */
export type UpdateImsProjectInput = {
  /** The description of the NamedNode */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The id of the node to update */
  id: Scalars['ID']['input'];
  /** The new name of the NamedNode, must not be empty */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Values for templatedFields to update */
  templatedFields?: InputMaybe<Array<JsonFieldInput>>;
};

/** Input for the updateInterfacePart mutation */
export type UpdateInterfacePartInput = {
  /** The description of the NamedNode */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The id of the node to update */
  id: Scalars['ID']['input'];
  /** The new name of the NamedNode, must not be empty */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Values for templatedFields to update */
  templatedFields?: InputMaybe<Array<JsonFieldInput>>;
};

/** Input for the updateInterfaceSpecification mutation */
export type UpdateInterfaceSpecificationInput = {
  /** The description of the NamedNode */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The id of the node to update */
  id: Scalars['ID']['input'];
  /**
   * Values for templatedFields of InterfaceParts to update.
   *         Only evaluated if `template` is provided!
   *         Affect all InterfaceParts of the updated InterfaceSpecification
   *
   */
  interfacePartTemplatedFields?: InputMaybe<Array<JsonFieldInput>>;
  /**
   * Values for templatedFields of InterfaceSpecificationVersions to update.
   *         Only evaluated if `template` is provided!
   *         Affect all InterfaceSpecificationVersions of the updated InterfaceSpecification
   *
   */
  interfaceSpecificationVersionTemplatedFields?: InputMaybe<Array<JsonFieldInput>>;
  /** The new name of the NamedNode, must not be empty */
  name?: InputMaybe<Scalars['String']['input']>;
  /**
   * If provided, the id of the new template for the Component
   *         Use `templatedFields` to update fields so that they conform with the new specifications.
   *         No longer needed fields are automatically removed.
   *
   */
  template?: InputMaybe<Scalars['ID']['input']>;
  /** Values for templatedFields to update */
  templatedFields?: InputMaybe<Array<JsonFieldInput>>;
};

/** Input for the updateInterfaceSpecificationVersion mutation */
export type UpdateInterfaceSpecificationVersionInput = {
  /** The id of the node to update */
  id: Scalars['ID']['input'];
  /** New tags of the InterfaceSpecificationVersion */
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Values for templatedFields to update */
  templatedFields?: InputMaybe<Array<JsonFieldInput>>;
  /** New version of the InterfaceSpecificationVersion */
  version?: InputMaybe<Scalars['String']['input']>;
};

/** Input for the updateIntraComponentDependencySpecification mutation */
export type UpdateIntraComponentDependencySpecificationInput = {
  /** Added incomingParticipants */
  addedIncomingParticipants?: InputMaybe<Array<IntraComponentDependencyParticipantInput>>;
  /** Added outgoingParticipants */
  addedOutgoingParticipants?: InputMaybe<Array<IntraComponentDependencyParticipantInput>>;
  /** The description of the NamedNode */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The id of the node to update */
  id: Scalars['ID']['input'];
  /** The new name of the NamedNode, must not be empty */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Ids of incomingParticipants to remove / delete */
  removedIncomingParticipants?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Ids of outgoingParticipants to remove / delete */
  removedOutgoingParticipants?: InputMaybe<Array<Scalars['ID']['input']>>;
};

/** Input for the updateIssueComment mutation */
export type UpdateIssueCommentInput = {
  /** Ids of Artefacts which should be added to `referencedArtefacts` */
  addedReferencedArtefacts?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** The body of the Comment */
  body?: InputMaybe<Scalars['String']['input']>;
  /** The id of the node to update */
  id: Scalars['ID']['input'];
  /** Ids of Artefacts which should be removed from `referencedArtefacts` */
  removedReferencedArtefacts?: InputMaybe<Array<Scalars['ID']['input']>>;
};

/** Input for the updateLabel mutation */
export type UpdateLabelInput = {
  /** The new color of the Label */
  color?: InputMaybe<Scalars['String']['input']>;
  /** The description of the NamedNode */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The id of the node to update */
  id: Scalars['ID']['input'];
  /** The new name of the NamedNode, must not be empty */
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Input for the updateProject mutation */
export type UpdateProjectInput = {
  /** Ids of permissions to add, must be disjoint with removedPermissions. */
  addedPermissions?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** The default view for the project */
  defaultView?: InputMaybe<Scalars['ID']['input']>;
  /** The description of the NamedNode */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The id of the node to update */
  id: Scalars['ID']['input'];
  /** The new name of the NamedNode, must not be empty */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Defines the new layout of a set of Relations */
  relationLayouts?: InputMaybe<Array<UpdateRelationLayoutInput>>;
  /** Defines the new layout of a set of RelationPartners */
  relationPartnerLayouts?: InputMaybe<Array<UpdateRelationPartnerLayoutInput>>;
  /**
   * Ids of permissions to remove, must be disjoint with addedPermissions.
   *         There must always be at least one permissions granting ADMIN to some GropiusUser left.
   *
   */
  removedPermissions?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** The repositoryURL of the named node */
  repositoryURL?: InputMaybe<Scalars['URL']['input']>;
};

/** Input for the updateProjectPermission mutation */
export type UpdateProjectPermissionInput = {
  /** Permission entries to add, must be disjoint with removedEntries */
  addedEntries?: InputMaybe<Array<ProjectPermissionEntry>>;
  /** Ids of affected users to add */
  addedUsers?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** The new value for allUsers */
  allUsers?: InputMaybe<Scalars['Boolean']['input']>;
  /** The description of the NamedNode */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The id of the node to update */
  id: Scalars['ID']['input'];
  /** The new name of the NamedNode, must not be empty */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Permission entries to remove, must be disjoint with addedEntries */
  removedEntries?: InputMaybe<Array<ProjectPermissionEntry>>;
  /** Ids of affected users to remove */
  removedUsers?: InputMaybe<Array<Scalars['ID']['input']>>;
};

/** Input for the updateRelation mutation */
export type UpdateRelationInput = {
  /** Ids of InterfaceParts of the `end` Interface to add to `endParts` */
  addedEndParts?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Ids of InterfaceParts of the `start` Interface to add to `startParts` */
  addedStartParts?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** The id of the node to update */
  id: Scalars['ID']['input'];
  /** Ids of InterfaceParts of the `end` Interface to remove from `endParts` */
  removedEndParts?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Ids of InterfaceParts of the `start` Interface to remove from `startParts` */
  removedStartParts?: InputMaybe<Array<Scalars['ID']['input']>>;
  /**
   * If provided, the id of the new template for the Component
   *         Use `templatedFields` to update fields so that they conform with the new specifications.
   *         No longer needed fields are automatically removed.
   *         Caution: the chosen Template must be compatible with the Templates of the start and end of the Relation.
   *
   */
  template?: InputMaybe<Scalars['ID']['input']>;
  /** Values for templatedFields to update */
  templatedFields?: InputMaybe<Array<JsonFieldInput>>;
};

/** Input to update the layout of a Relation */
export type UpdateRelationLayoutInput = {
  /** The new layout of the Relation, or null if the layout should be reset */
  layout?: InputMaybe<RelationLayoutInput>;
  /** The id of the Relation of which to update the layout */
  relation: Scalars['ID']['input'];
};

/** Input to update the layout of a RelationPartner */
export type UpdateRelationPartnerLayoutInput = {
  /** The new layout of the RelationPartner, or null if the layout should be reset */
  layout?: InputMaybe<RelationPartnerLayoutInput>;
  /** The id of the RelationPartner of which to update the layout */
  relationPartner: Scalars['ID']['input'];
};

/** Input for the updateSyncPermissions mutation */
export type UpdateSyncPermissionsInput = {
  /** Whether the sync service is allowed to sync content of other users */
  canSyncOthers?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether the sync service is allowed to sync content of the user */
  canSyncSelf?: InputMaybe<Scalars['Boolean']['input']>;
  /** The SyncPermissionTarget to update the sync permissions for the current user */
  id: Scalars['ID']['input'];
};

/** Input for the updateTemplateDeprecationStatus mutation */
export type UpdateTemplateDeprecationStatusInput = {
  /** The id of the node to update */
  id: Scalars['ID']['input'];
  /** The new deprecation status of the template */
  isDeprecated: Scalars['Boolean']['input'];
};

/** Input for the updateView mutation */
export type UpdateViewInput = {
  /** The description of the NamedNode */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The new filter of the view */
  filterByTemplate?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** The id of the node to update */
  id: Scalars['ID']['input'];
  /** The new name of the NamedNode, must not be empty */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Defines the new layout of a set of Relations */
  relationLayouts?: InputMaybe<Array<UpdateRelationLayoutInput>>;
  /** Defines the new layout of a set of RelationPartners */
  relationPartnerLayouts?: InputMaybe<Array<UpdateRelationPartnerLayoutInput>>;
};

/** Filter used to filter User */
export type UserFilterInput = {
  /** Connects all subformulas via and */
  and?: InputMaybe<Array<UserFilterInput>>;
  /** Filter by assignments */
  assignments?: InputMaybe<AssignmentListFilterInput>;
  /** Filter by createdNodes */
  createdNodes?: InputMaybe<AuditedNodeListFilterInput>;
  /** Filter by displayName */
  displayName?: InputMaybe<StringFilterInput>;
  /** Filter by email */
  email?: InputMaybe<NullableStringFilterInput>;
  /** Filter by id */
  id?: InputMaybe<IdFilterInput>;
  /** Filter for nodes of type GropiusUser */
  isGropiusUserAnd?: InputMaybe<GropiusUserFilterInput>;
  /** Filter for nodes of type IMSUser */
  isIMSUserAnd?: InputMaybe<ImsUserFilterInput>;
  /** Negates the subformula */
  not?: InputMaybe<UserFilterInput>;
  /** Connects all subformulas via or */
  or?: InputMaybe<Array<UserFilterInput>>;
  /** Filter by participatedIssues */
  participatedIssues?: InputMaybe<IssueListFilterInput>;
  /** Filter by username */
  username?: InputMaybe<NullableStringFilterInput>;
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type UserListFilterInput = {
  /** Filters for nodes where all of the related nodes match this filter */
  all?: InputMaybe<UserFilterInput>;
  /** Filters for nodes where any of the related nodes match this filter */
  any?: InputMaybe<UserFilterInput>;
  /** Filters for nodes where none of the related nodes match this filter */
  none?: InputMaybe<UserFilterInput>;
};

/** Defines the order of a User list */
export type UserOrder = {
  /** The direction to order by, defaults to ASC */
  direction?: InputMaybe<OrderDirection>;
  /** The field to order by, defaults to ID */
  field?: InputMaybe<UserOrderField>;
};

/** Fields a list of User can be sorted by */
export enum UserOrderField {
  /** Order by displayName */
  DisplayName = 'DISPLAY_NAME',
  /** Order by email */
  Email = 'EMAIL',
  /** Order by id */
  Id = 'ID',
  /** Order by username */
  Username = 'USERNAME'
}

/** Filter used to filter View */
export type ViewFilterInput = {
  /** Connects all subformulas via and */
  and?: InputMaybe<Array<ViewFilterInput>>;
  /** Filter by description */
  description?: InputMaybe<StringFilterInput>;
  /** Filter by filterByTemplate */
  filterByTemplate?: InputMaybe<ComponentTemplateListFilterInput>;
  /** Filter by id */
  id?: InputMaybe<IdFilterInput>;
  /** Filter by name */
  name?: InputMaybe<StringFilterInput>;
  /** Negates the subformula */
  not?: InputMaybe<ViewFilterInput>;
  /** Connects all subformulas via or */
  or?: InputMaybe<Array<ViewFilterInput>>;
  /** Filters for nodes where the related node match this filter */
  project?: InputMaybe<ProjectFilterInput>;
  /** Filter by relationLayouts */
  relationLayouts?: InputMaybe<RelationLayoutListFilterInput>;
  /** Filter by relationPartnerLayouts */
  relationPartnerLayouts?: InputMaybe<RelationPartnerLayoutListFilterInput>;
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type ViewListFilterInput = {
  /** Filters for nodes where all of the related nodes match this filter */
  all?: InputMaybe<ViewFilterInput>;
  /** Filters for nodes where any of the related nodes match this filter */
  any?: InputMaybe<ViewFilterInput>;
  /** Filters for nodes where none of the related nodes match this filter */
  none?: InputMaybe<ViewFilterInput>;
};

/** Defines the order of a View list */
export type ViewOrder = {
  /** The direction to order by, defaults to ASC */
  direction?: InputMaybe<OrderDirection>;
  /** The field to order by, defaults to ID */
  field?: InputMaybe<ViewOrderField>;
};

/** Fields a list of View can be sorted by */
export enum ViewOrderField {
  /** Order by id */
  Id = 'ID',
  /** Order by name */
  Name = 'NAME'
}

export type GetProjectQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetProjectQuery = { __typename?: 'Query', node?: { __typename?: 'AddedAffectedEntityEvent' } | { __typename?: 'AddedArtefactEvent' } | { __typename?: 'AddedLabelEvent' } | { __typename?: 'AddedToPinnedIssuesEvent' } | { __typename?: 'AddedToTrackableEvent' } | { __typename?: 'AggregatedIssue' } | { __typename?: 'AggregatedIssueRelation' } | { __typename?: 'Artefact' } | { __typename?: 'ArtefactTemplate' } | { __typename?: 'Assignment' } | { __typename?: 'AssignmentType' } | { __typename?: 'AssignmentTypeChangedEvent' } | { __typename?: 'Body' } | { __typename?: 'Component' } | { __typename?: 'ComponentPermission' } | { __typename?: 'ComponentTemplate' } | { __typename?: 'ComponentVersion' } | { __typename?: 'ComponentVersionTemplate' } | { __typename?: 'FillStyle' } | { __typename?: 'GlobalPermission' } | { __typename?: 'GropiusUser' } | { __typename?: 'IMS' } | { __typename?: 'IMSIssue' } | { __typename?: 'IMSIssueTemplate' } | { __typename?: 'IMSPermission' } | { __typename?: 'IMSProject' } | { __typename?: 'IMSProjectTemplate' } | { __typename?: 'IMSTemplate' } | { __typename?: 'IMSUser' } | { __typename?: 'IMSUserTemplate' } | { __typename?: 'IncomingRelationTypeChangedEvent' } | { __typename?: 'Interface' } | { __typename?: 'InterfaceDefinition' } | { __typename?: 'InterfacePart' } | { __typename?: 'InterfacePartTemplate' } | { __typename?: 'InterfaceSpecification' } | { __typename?: 'InterfaceSpecificationDerivationCondition' } | { __typename?: 'InterfaceSpecificationTemplate' } | { __typename?: 'InterfaceSpecificationVersion' } | { __typename?: 'InterfaceSpecificationVersionTemplate' } | { __typename?: 'IntraComponentDependencyParticipant' } | { __typename?: 'IntraComponentDependencySpecification' } | { __typename?: 'Issue' } | { __typename?: 'IssueComment' } | { __typename?: 'IssuePriority' } | { __typename?: 'IssueRelation' } | { __typename?: 'IssueRelationType' } | { __typename?: 'IssueState' } | { __typename?: 'IssueTemplate' } | { __typename?: 'IssueType' } | { __typename?: 'Label' } | { __typename?: 'OutgoingRelationTypeChangedEvent' } | { __typename?: 'PriorityChangedEvent' } | { __typename?: 'Project', id: string, name: string, description: string, components: { __typename?: 'ComponentVersionConnection', nodes: Array<{ __typename?: 'ComponentVersion', id: string, version: string, component: { __typename?: 'Component', id: string, name: string, description: string, templatedFields: Array<{ __typename?: 'JSONField', name: string, value?: any | null }> }, outgoingRelations: { __typename?: 'RelationConnection', nodes: Array<{ __typename?: 'Relation', id: string, template: { __typename?: 'RelationTemplate', id: string }, templatedFields: Array<{ __typename?: 'JSONField', name: string, value?: any | null }> }> }, interfaceDefinitions: { __typename?: 'InterfaceDefinitionConnection', nodes: Array<{ __typename?: 'InterfaceDefinition', id: string, visibleInterface?: { __typename?: 'Interface', id: string, outgoingRelations: { __typename?: 'RelationConnection', nodes: Array<{ __typename?: 'Relation', id: string, template: { __typename?: 'RelationTemplate', id: string }, templatedFields: Array<{ __typename?: 'JSONField', name: string, value?: any | null }> }> } } | null, interfaceSpecificationVersion: { __typename?: 'InterfaceSpecificationVersion', id: string, version: string, interfaceSpecification: { __typename?: 'InterfaceSpecification', id: string, name: string, description: string, template: { __typename?: 'InterfaceSpecificationTemplate', id: string }, templatedFields: Array<{ __typename?: 'JSONField', name: string, value?: any | null }> } } }> }, intraComponentDependencySpecifications: { __typename?: 'IntraComponentDependencySpecificationConnection', nodes: Array<{ __typename?: 'IntraComponentDependencySpecification', id: string, incomingParticipants: { __typename?: 'IntraComponentDependencyParticipantConnection', nodes: Array<{ __typename?: 'IntraComponentDependencyParticipant', interface: { __typename?: 'Interface', id: string } }> }, outgoingParticipants: { __typename?: 'IntraComponentDependencyParticipantConnection', nodes: Array<{ __typename?: 'IntraComponentDependencyParticipant', interface: { __typename?: 'Interface', id: string } }> } }> } }> } } | { __typename?: 'ProjectPermission' } | { __typename?: 'RelatedByIssueEvent' } | { __typename?: 'Relation' } | { __typename?: 'RelationCondition' } | { __typename?: 'RelationLayout' } | { __typename?: 'RelationPartnerLayout' } | { __typename?: 'RelationTemplate' } | { __typename?: 'RemovedAffectedEntityEvent' } | { __typename?: 'RemovedArtefactEvent' } | { __typename?: 'RemovedAssignmentEvent' } | { __typename?: 'RemovedFromPinnedIssuesEvent' } | { __typename?: 'RemovedFromTrackableEvent' } | { __typename?: 'RemovedIncomingRelationEvent' } | { __typename?: 'RemovedLabelEvent' } | { __typename?: 'RemovedOutgoingRelationEvent' } | { __typename?: 'RemovedTemplatedFieldEvent' } | { __typename?: 'StateChangedEvent' } | { __typename?: 'StrokeStyle' } | { __typename?: 'TemplateChangedEvent' } | { __typename?: 'TemplatedFieldChangedEvent' } | { __typename?: 'TitleChangedEvent' } | { __typename?: 'TypeChangedEvent' } | { __typename?: 'View' } | null };

export type ProjectInfoFragment = { __typename?: 'Project', id: string, name: string, description: string, components: { __typename?: 'ComponentVersionConnection', nodes: Array<{ __typename?: 'ComponentVersion', id: string, version: string, component: { __typename?: 'Component', id: string, name: string, description: string, templatedFields: Array<{ __typename?: 'JSONField', name: string, value?: any | null }> }, outgoingRelations: { __typename?: 'RelationConnection', nodes: Array<{ __typename?: 'Relation', id: string, template: { __typename?: 'RelationTemplate', id: string }, templatedFields: Array<{ __typename?: 'JSONField', name: string, value?: any | null }> }> }, interfaceDefinitions: { __typename?: 'InterfaceDefinitionConnection', nodes: Array<{ __typename?: 'InterfaceDefinition', id: string, visibleInterface?: { __typename?: 'Interface', id: string, outgoingRelations: { __typename?: 'RelationConnection', nodes: Array<{ __typename?: 'Relation', id: string, template: { __typename?: 'RelationTemplate', id: string }, templatedFields: Array<{ __typename?: 'JSONField', name: string, value?: any | null }> }> } } | null, interfaceSpecificationVersion: { __typename?: 'InterfaceSpecificationVersion', id: string, version: string, interfaceSpecification: { __typename?: 'InterfaceSpecification', id: string, name: string, description: string, template: { __typename?: 'InterfaceSpecificationTemplate', id: string }, templatedFields: Array<{ __typename?: 'JSONField', name: string, value?: any | null }> } } }> }, intraComponentDependencySpecifications: { __typename?: 'IntraComponentDependencySpecificationConnection', nodes: Array<{ __typename?: 'IntraComponentDependencySpecification', id: string, incomingParticipants: { __typename?: 'IntraComponentDependencyParticipantConnection', nodes: Array<{ __typename?: 'IntraComponentDependencyParticipant', interface: { __typename?: 'Interface', id: string } }> }, outgoingParticipants: { __typename?: 'IntraComponentDependencyParticipantConnection', nodes: Array<{ __typename?: 'IntraComponentDependencyParticipant', interface: { __typename?: 'Interface', id: string } }> } }> } }> } };

export type ComponentInfoFragment = { __typename?: 'ComponentVersion', id: string, version: string, component: { __typename?: 'Component', id: string, name: string, description: string, templatedFields: Array<{ __typename?: 'JSONField', name: string, value?: any | null }> }, outgoingRelations: { __typename?: 'RelationConnection', nodes: Array<{ __typename?: 'Relation', id: string, template: { __typename?: 'RelationTemplate', id: string }, templatedFields: Array<{ __typename?: 'JSONField', name: string, value?: any | null }> }> }, interfaceDefinitions: { __typename?: 'InterfaceDefinitionConnection', nodes: Array<{ __typename?: 'InterfaceDefinition', id: string, visibleInterface?: { __typename?: 'Interface', id: string, outgoingRelations: { __typename?: 'RelationConnection', nodes: Array<{ __typename?: 'Relation', id: string, template: { __typename?: 'RelationTemplate', id: string }, templatedFields: Array<{ __typename?: 'JSONField', name: string, value?: any | null }> }> } } | null, interfaceSpecificationVersion: { __typename?: 'InterfaceSpecificationVersion', id: string, version: string, interfaceSpecification: { __typename?: 'InterfaceSpecification', id: string, name: string, description: string, template: { __typename?: 'InterfaceSpecificationTemplate', id: string }, templatedFields: Array<{ __typename?: 'JSONField', name: string, value?: any | null }> } } }> }, intraComponentDependencySpecifications: { __typename?: 'IntraComponentDependencySpecificationConnection', nodes: Array<{ __typename?: 'IntraComponentDependencySpecification', id: string, incomingParticipants: { __typename?: 'IntraComponentDependencyParticipantConnection', nodes: Array<{ __typename?: 'IntraComponentDependencyParticipant', interface: { __typename?: 'Interface', id: string } }> }, outgoingParticipants: { __typename?: 'IntraComponentDependencyParticipantConnection', nodes: Array<{ __typename?: 'IntraComponentDependencyParticipant', interface: { __typename?: 'Interface', id: string } }> } }> } };

export type InterfaceInfoFragment = { __typename?: 'InterfaceDefinition', id: string, visibleInterface?: { __typename?: 'Interface', id: string, outgoingRelations: { __typename?: 'RelationConnection', nodes: Array<{ __typename?: 'Relation', id: string, template: { __typename?: 'RelationTemplate', id: string }, templatedFields: Array<{ __typename?: 'JSONField', name: string, value?: any | null }> }> } } | null, interfaceSpecificationVersion: { __typename?: 'InterfaceSpecificationVersion', id: string, version: string, interfaceSpecification: { __typename?: 'InterfaceSpecification', id: string, name: string, description: string, template: { __typename?: 'InterfaceSpecificationTemplate', id: string }, templatedFields: Array<{ __typename?: 'JSONField', name: string, value?: any | null }> } } };

export type RelationInfoFragment = { __typename?: 'Relation', id: string, template: { __typename?: 'RelationTemplate', id: string }, templatedFields: Array<{ __typename?: 'JSONField', name: string, value?: any | null }> };

export type IntraComponentDependencySpecificationInfoFragment = { __typename?: 'IntraComponentDependencySpecification', id: string, incomingParticipants: { __typename?: 'IntraComponentDependencyParticipantConnection', nodes: Array<{ __typename?: 'IntraComponentDependencyParticipant', interface: { __typename?: 'Interface', id: string } }> }, outgoingParticipants: { __typename?: 'IntraComponentDependencyParticipantConnection', nodes: Array<{ __typename?: 'IntraComponentDependencyParticipant', interface: { __typename?: 'Interface', id: string } }> } };

export type CreateProjectMutationVariables = Exact<{
  input: CreateProjectInput;
}>;


export type CreateProjectMutation = { __typename?: 'Mutation', createProject: { __typename?: 'CreateProjectPayload', project: { __typename?: 'Project', id: string } } };

export type UpdateProjectMutationVariables = Exact<{
  input: UpdateProjectInput;
}>;


export type UpdateProjectMutation = { __typename?: 'Mutation', updateProject: { __typename?: 'UpdateProjectPayload', project: { __typename?: 'Project', id: string } } };

export type CreateComponentMutationVariables = Exact<{
  input: CreateComponentInput;
}>;


export type CreateComponentMutation = { __typename?: 'Mutation', createComponent: { __typename?: 'CreateComponentPayload', component: { __typename?: 'Component', id: string } } };

export type UpdateComponentMutationVariables = Exact<{
  input: UpdateComponentInput;
}>;


export type UpdateComponentMutation = { __typename?: 'Mutation', updateComponent: { __typename?: 'UpdateComponentPayload', component: { __typename?: 'Component', id: string } } };

export type UpdateComponentVersionMutationVariables = Exact<{
  input: UpdateComponentVersionInput;
}>;


export type UpdateComponentVersionMutation = { __typename?: 'Mutation', updateComponentVersion: { __typename?: 'UpdateComponentVersionPayload', componentVersion: { __typename?: 'ComponentVersion', id: string } } };

export type CreateInterfaceSpecificationMutationVariables = Exact<{
  input: CreateInterfaceSpecificationInput;
}>;


export type CreateInterfaceSpecificationMutation = { __typename?: 'Mutation', createInterfaceSpecification: { __typename?: 'CreateInterfaceSpecificationPayload', interfaceSpecification: { __typename?: 'InterfaceSpecification', id: string } } };

export type UpdateInterfaceSpecificationVersionMutationVariables = Exact<{
  input: UpdateInterfaceSpecificationVersionInput;
}>;


export type UpdateInterfaceSpecificationVersionMutation = { __typename?: 'Mutation', updateInterfaceSpecificationVersion: { __typename?: 'UpdateInterfaceSpecificationVersionPayload', interfaceSpecificationVersion: { __typename?: 'InterfaceSpecificationVersion', id: string } } };

export type CreateRelationMutationVariables = Exact<{
  input: CreateRelationInput;
}>;


export type CreateRelationMutation = { __typename?: 'Mutation', createRelation: { __typename?: 'CreateRelationPayload', relation: { __typename?: 'Relation', id: string } } };

export type UpdateRelationMutationVariables = Exact<{
  input: UpdateRelationInput;
}>;


export type UpdateRelationMutation = { __typename?: 'Mutation', updateRelation: { __typename?: 'UpdateRelationPayload', relation: { __typename?: 'Relation', id: string } } };

export type CreateIntraComponentDependencySpecificationMutationVariables = Exact<{
  input: CreateIntraComponentDependencySpecificationInput;
}>;


export type CreateIntraComponentDependencySpecificationMutation = { __typename?: 'Mutation', createIntraComponentDependencySpecification: { __typename?: 'CreateIntraComponentDependencySpecificationPayload', intraComponentDependencySpecification: { __typename?: 'IntraComponentDependencySpecification', id: string } } };

export type UpdateIntraComponentDependencySpecificationMutationVariables = Exact<{
  input: UpdateIntraComponentDependencySpecificationInput;
}>;


export type UpdateIntraComponentDependencySpecificationMutation = { __typename?: 'Mutation', updateIntraComponentDependencySpecification: { __typename?: 'UpdateIntraComponentDependencySpecificationPayload', intraComponentDependencySpecification: { __typename?: 'IntraComponentDependencySpecification', id: string } } };

export type AddInterfaceSpecificationVersionToComponentVersionMutationVariables = Exact<{
  input: AddInterfaceSpecificationVersionToComponentVersionInput;
}>;


export type AddInterfaceSpecificationVersionToComponentVersionMutation = { __typename?: 'Mutation', addInterfaceSpecificationVersionToComponentVersion: { __typename?: 'AddInterfaceSpecificationVersionToComponentVersionPayload', componentVersion: { __typename?: 'ComponentVersion', id: string } } };

export type RemoveInterfaceSpecificationVersionFromComponentVersionMutationVariables = Exact<{
  input: RemoveInterfaceSpecificationVersionFromComponentVersionInput;
}>;


export type RemoveInterfaceSpecificationVersionFromComponentVersionMutation = { __typename?: 'Mutation', removeInterfaceSpecificationVersionFromComponentVersion: { __typename?: 'RemoveInterfaceSpecificationVersionFromComponentVersionPayload', componentVersion: { __typename?: 'ComponentVersion', id: string } } };

export type DeleteIntraComponentDependencySpecificationMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteIntraComponentDependencySpecificationMutation = { __typename?: 'Mutation', deleteIntraComponentDependencySpecification: { __typename: 'DeleteNodePayload' } };

export type DeleteInterfaceSpecificationMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteInterfaceSpecificationMutation = { __typename?: 'Mutation', deleteInterfaceSpecification: { __typename: 'DeleteNodePayload' } };

export type DeleteRelationMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteRelationMutation = { __typename?: 'Mutation', deleteRelation: { __typename: 'DeleteNodePayload' } };

export type AddComponentVersionToProjectMutationVariables = Exact<{
  input: AddComponentVersionToProjectInput;
}>;


export type AddComponentVersionToProjectMutation = { __typename?: 'Mutation', addComponentVersionToProject: { __typename?: 'AddComponentVersionToProjectPayload', project: { __typename?: 'Project', id: string } } };

export type RemoveComponentVersionFromProjectMutationVariables = Exact<{
  input: RemoveComponentVersionFromProjectInput;
}>;


export type RemoveComponentVersionFromProjectMutation = { __typename?: 'Mutation', removeComponentVersionFromProject: { __typename?: 'RemoveComponentVersionFromProjectPayload', project: { __typename?: 'Project', id: string } } };

export const RelationInfoFragmentDoc = gql`
    fragment RelationInfo on Relation {
  id
  template {
    id
  }
  templatedFields {
    name
    value
  }
}
    `;
export const InterfaceInfoFragmentDoc = gql`
    fragment InterfaceInfo on InterfaceDefinition {
  id
  visibleInterface {
    id
    outgoingRelations {
      nodes {
        ...RelationInfo
      }
    }
  }
  interfaceSpecificationVersion {
    id
    version
    interfaceSpecification {
      id
      name
      description
      template {
        id
      }
      templatedFields {
        name
        value
      }
    }
  }
}
    ${RelationInfoFragmentDoc}`;
export const IntraComponentDependencySpecificationInfoFragmentDoc = gql`
    fragment IntraComponentDependencySpecificationInfo on IntraComponentDependencySpecification {
  id
  incomingParticipants {
    nodes {
      interface {
        id
      }
    }
  }
  outgoingParticipants {
    nodes {
      interface {
        id
      }
    }
  }
}
    `;
export const ComponentInfoFragmentDoc = gql`
    fragment ComponentInfo on ComponentVersion {
  id
  version
  component {
    id
    name
    description
    templatedFields {
      name
      value
    }
  }
  outgoingRelations {
    nodes {
      ...RelationInfo
    }
  }
  interfaceDefinitions {
    nodes {
      ...InterfaceInfo
    }
  }
  intraComponentDependencySpecifications {
    nodes {
      ...IntraComponentDependencySpecificationInfo
    }
  }
}
    ${RelationInfoFragmentDoc}
${InterfaceInfoFragmentDoc}
${IntraComponentDependencySpecificationInfoFragmentDoc}`;
export const ProjectInfoFragmentDoc = gql`
    fragment ProjectInfo on Project {
  id
  name
  description
  components {
    nodes {
      ...ComponentInfo
    }
  }
}
    ${ComponentInfoFragmentDoc}`;
export const GetProjectDocument = gql`
    query getProject($id: ID!) {
  node(id: $id) {
    ... on Project {
      ...ProjectInfo
    }
  }
}
    ${ProjectInfoFragmentDoc}`;
export const CreateProjectDocument = gql`
    mutation createProject($input: CreateProjectInput!) {
  createProject(input: $input) {
    project {
      id
    }
  }
}
    `;
export const UpdateProjectDocument = gql`
    mutation updateProject($input: UpdateProjectInput!) {
  updateProject(input: $input) {
    project {
      id
    }
  }
}
    `;
export const CreateComponentDocument = gql`
    mutation createComponent($input: CreateComponentInput!) {
  createComponent(input: $input) {
    component {
      id
    }
  }
}
    `;
export const UpdateComponentDocument = gql`
    mutation updateComponent($input: UpdateComponentInput!) {
  updateComponent(input: $input) {
    component {
      id
    }
  }
}
    `;
export const UpdateComponentVersionDocument = gql`
    mutation updateComponentVersion($input: UpdateComponentVersionInput!) {
  updateComponentVersion(input: $input) {
    componentVersion {
      id
    }
  }
}
    `;
export const CreateInterfaceSpecificationDocument = gql`
    mutation createInterfaceSpecification($input: CreateInterfaceSpecificationInput!) {
  createInterfaceSpecification(input: $input) {
    interfaceSpecification {
      id
    }
  }
}
    `;
export const UpdateInterfaceSpecificationVersionDocument = gql`
    mutation updateInterfaceSpecificationVersion($input: UpdateInterfaceSpecificationVersionInput!) {
  updateInterfaceSpecificationVersion(input: $input) {
    interfaceSpecificationVersion {
      id
    }
  }
}
    `;
export const CreateRelationDocument = gql`
    mutation createRelation($input: CreateRelationInput!) {
  createRelation(input: $input) {
    relation {
      id
    }
  }
}
    `;
export const UpdateRelationDocument = gql`
    mutation updateRelation($input: UpdateRelationInput!) {
  updateRelation(input: $input) {
    relation {
      id
    }
  }
}
    `;
export const CreateIntraComponentDependencySpecificationDocument = gql`
    mutation createIntraComponentDependencySpecification($input: CreateIntraComponentDependencySpecificationInput!) {
  createIntraComponentDependencySpecification(input: $input) {
    intraComponentDependencySpecification {
      id
    }
  }
}
    `;
export const UpdateIntraComponentDependencySpecificationDocument = gql`
    mutation updateIntraComponentDependencySpecification($input: UpdateIntraComponentDependencySpecificationInput!) {
  updateIntraComponentDependencySpecification(input: $input) {
    intraComponentDependencySpecification {
      id
    }
  }
}
    `;
export const AddInterfaceSpecificationVersionToComponentVersionDocument = gql`
    mutation addInterfaceSpecificationVersionToComponentVersion($input: AddInterfaceSpecificationVersionToComponentVersionInput!) {
  addInterfaceSpecificationVersionToComponentVersion(input: $input) {
    componentVersion {
      id
    }
  }
}
    `;
export const RemoveInterfaceSpecificationVersionFromComponentVersionDocument = gql`
    mutation removeInterfaceSpecificationVersionFromComponentVersion($input: RemoveInterfaceSpecificationVersionFromComponentVersionInput!) {
  removeInterfaceSpecificationVersionFromComponentVersion(input: $input) {
    componentVersion {
      id
    }
  }
}
    `;
export const DeleteIntraComponentDependencySpecificationDocument = gql`
    mutation deleteIntraComponentDependencySpecification($id: ID!) {
  deleteIntraComponentDependencySpecification(input: {id: $id}) {
    __typename
  }
}
    `;
export const DeleteInterfaceSpecificationDocument = gql`
    mutation deleteInterfaceSpecification($id: ID!) {
  deleteInterfaceSpecification(input: {id: $id}) {
    __typename
  }
}
    `;
export const DeleteRelationDocument = gql`
    mutation deleteRelation($id: ID!) {
  deleteRelation(input: {id: $id}) {
    __typename
  }
}
    `;
export const AddComponentVersionToProjectDocument = gql`
    mutation addComponentVersionToProject($input: AddComponentVersionToProjectInput!) {
  addComponentVersionToProject(input: $input) {
    project {
      id
    }
  }
}
    `;
export const RemoveComponentVersionFromProjectDocument = gql`
    mutation removeComponentVersionFromProject($input: RemoveComponentVersionFromProjectInput!) {
  removeComponentVersionFromProject(input: $input) {
    project {
      id
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getProject(variables: GetProjectQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetProjectQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetProjectQuery>(GetProjectDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getProject', 'query', variables);
    },
    createProject(variables: CreateProjectMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CreateProjectMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateProjectMutation>(CreateProjectDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createProject', 'mutation', variables);
    },
    updateProject(variables: UpdateProjectMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<UpdateProjectMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateProjectMutation>(UpdateProjectDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateProject', 'mutation', variables);
    },
    createComponent(variables: CreateComponentMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CreateComponentMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateComponentMutation>(CreateComponentDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createComponent', 'mutation', variables);
    },
    updateComponent(variables: UpdateComponentMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<UpdateComponentMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateComponentMutation>(UpdateComponentDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateComponent', 'mutation', variables);
    },
    updateComponentVersion(variables: UpdateComponentVersionMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<UpdateComponentVersionMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateComponentVersionMutation>(UpdateComponentVersionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateComponentVersion', 'mutation', variables);
    },
    createInterfaceSpecification(variables: CreateInterfaceSpecificationMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CreateInterfaceSpecificationMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateInterfaceSpecificationMutation>(CreateInterfaceSpecificationDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createInterfaceSpecification', 'mutation', variables);
    },
    updateInterfaceSpecificationVersion(variables: UpdateInterfaceSpecificationVersionMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<UpdateInterfaceSpecificationVersionMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateInterfaceSpecificationVersionMutation>(UpdateInterfaceSpecificationVersionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateInterfaceSpecificationVersion', 'mutation', variables);
    },
    createRelation(variables: CreateRelationMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CreateRelationMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateRelationMutation>(CreateRelationDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createRelation', 'mutation', variables);
    },
    updateRelation(variables: UpdateRelationMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<UpdateRelationMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateRelationMutation>(UpdateRelationDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateRelation', 'mutation', variables);
    },
    createIntraComponentDependencySpecification(variables: CreateIntraComponentDependencySpecificationMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CreateIntraComponentDependencySpecificationMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateIntraComponentDependencySpecificationMutation>(CreateIntraComponentDependencySpecificationDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createIntraComponentDependencySpecification', 'mutation', variables);
    },
    updateIntraComponentDependencySpecification(variables: UpdateIntraComponentDependencySpecificationMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<UpdateIntraComponentDependencySpecificationMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateIntraComponentDependencySpecificationMutation>(UpdateIntraComponentDependencySpecificationDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateIntraComponentDependencySpecification', 'mutation', variables);
    },
    addInterfaceSpecificationVersionToComponentVersion(variables: AddInterfaceSpecificationVersionToComponentVersionMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<AddInterfaceSpecificationVersionToComponentVersionMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AddInterfaceSpecificationVersionToComponentVersionMutation>(AddInterfaceSpecificationVersionToComponentVersionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'addInterfaceSpecificationVersionToComponentVersion', 'mutation', variables);
    },
    removeInterfaceSpecificationVersionFromComponentVersion(variables: RemoveInterfaceSpecificationVersionFromComponentVersionMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<RemoveInterfaceSpecificationVersionFromComponentVersionMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<RemoveInterfaceSpecificationVersionFromComponentVersionMutation>(RemoveInterfaceSpecificationVersionFromComponentVersionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'removeInterfaceSpecificationVersionFromComponentVersion', 'mutation', variables);
    },
    deleteIntraComponentDependencySpecification(variables: DeleteIntraComponentDependencySpecificationMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<DeleteIntraComponentDependencySpecificationMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteIntraComponentDependencySpecificationMutation>(DeleteIntraComponentDependencySpecificationDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteIntraComponentDependencySpecification', 'mutation', variables);
    },
    deleteInterfaceSpecification(variables: DeleteInterfaceSpecificationMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<DeleteInterfaceSpecificationMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteInterfaceSpecificationMutation>(DeleteInterfaceSpecificationDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteInterfaceSpecification', 'mutation', variables);
    },
    deleteRelation(variables: DeleteRelationMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<DeleteRelationMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteRelationMutation>(DeleteRelationDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteRelation', 'mutation', variables);
    },
    addComponentVersionToProject(variables: AddComponentVersionToProjectMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<AddComponentVersionToProjectMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AddComponentVersionToProjectMutation>(AddComponentVersionToProjectDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'addComponentVersionToProject', 'mutation', variables);
    },
    removeComponentVersionFromProject(variables: RemoveComponentVersionFromProjectMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<RemoveComponentVersionFromProjectMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<RemoveComponentVersionFromProjectMutation>(RemoveComponentVersionFromProjectDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'removeComponentVersionFromProject', 'mutation', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;
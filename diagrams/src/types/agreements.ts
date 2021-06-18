
type DID = string
type AgreementType = 'A' | 'B' | 'C'
type AgreementStatus = 'active' | 'pause' | 'violated' | 'terminated'

type AgreementsFilter = Partial<Agreement>

type AgreementField = keyof Agreement

interface AgreementsQueryArgs {
  filter?: AgreementsFilter
  fields: Array<AgreementField>
}

interface AgreementsQueryBody {
  query: 'agreements'
  args: AgreementsQueryArgs
}

interface ArgreementsQueryResponse {
  agreements: Array<Partial<Agreement>>
}

interface Agreement {
  id: string
  offeringId: string
  cosumer: DID // Hello
  provider: DID

  type: AgreementType
  status: AgreementStatus
}

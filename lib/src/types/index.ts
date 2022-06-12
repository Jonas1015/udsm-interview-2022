/* year data type */
export type yearData = {
    value: number
    name: string
    code: code
    reportingRate: string
}

/*combine result type */
export type data = {
    value: number
    name: string
    code: code
}

type code = 'MEMBER_REGISTERED' | 'ACTIVE_MEMBERS'
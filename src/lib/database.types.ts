export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      quote_requests: {
        Row: {
          id: string
          name: string
          email: string
          phone: string | null
          service: string | null
          message: string | null
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          email: string
          phone?: string | null
          service?: string | null
          message?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          email?: string
          phone?: string | null
          service?: string | null
          message?: string | null
          created_at?: string
        }
        Relationships: []
      }
      partners: {
        Row: {
          id: string
          name: string
          slug: string
          phone: string | null
          business_name: string | null
          earnings_paid: number
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          slug: string
          phone?: string | null
          business_name?: string | null
          earnings_paid?: number
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          slug?: string
          phone?: string | null
          business_name?: string | null
          earnings_paid?: number
          created_at?: string
        }
        Relationships: []
      }
      referrals: {
        Row: {
          id: string
          partner_id: string | null
          status: string
          created_at: string
        }
        Insert: {
          id?: string
          partner_id?: string | null
          status?: string
          created_at?: string
        }
        Update: {
          id?: string
          partner_id?: string | null
          status?: string
          created_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "referrals_partner_id_fkey"
            columns: ["partner_id"]
            referencedRelation: "partners"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Partner = Database['public']['Tables']['partners']['Row']
export type PartnerInsert = Database['public']['Tables']['partners']['Insert']
export type PartnerUpdate = Database['public']['Tables']['partners']['Update']
export type Referral = Database['public']['Tables']['referrals']['Row']
export type ReferralInsert = Database['public']['Tables']['referrals']['Insert']
